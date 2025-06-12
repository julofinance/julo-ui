# Dependencies stage
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY .npmrc package.json pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  elif [ -f package-lock.json ]; then npm ci --legacy-peer-deps; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Builder stage
FROM node:20-alpine AS builder
WORKDIR /app

# Print the build argument (for debugging)
RUN echo "Building the App..."

COPY . .
COPY --from=deps /app/node_modules ./node_modules

# Build the app
RUN pnpm build-storybook

# NGINX stage
FROM nginx:1.19
ADD ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the build output to replace the default nginx contents
COPY --from=builder /app/storybook-static /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]