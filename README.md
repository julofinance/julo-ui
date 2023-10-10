<div align="center">
  <a href="https://github.com/julofinance/julo-ui">
    <h1 align='center'>JULO UI</h1>
  </a>
</div>

<div align="center">
  <a href="https://github.com/julofinance/julo-ui/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/julofinance/julo-ui"/>
  </a>
</div>

## Table of contents

- 👋 [Introduction](#introduction)
- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
- 🏗️ [Contribute](#contribute)
- ⚖️ [License](#license)

## Introduction

JULO UI is a ...

- **Value 1**. Some descriptions
- **Value 2**. Some descriptions
- **Value 3**. Some descriptions

JULO Web Frontend team has built this library to **make our UI design development and maintenance easier**.
JULO has long created its own design system created by the Product Design team. The design is meant to be applied
to all of our applications from web apps to mobile apps. However, since JULO has multiple web apps
for various features, partnership products, as well as internal services, built by different teams
on source codes stored in different git repositories, this made it challenging to maintain a unified design.
Rather than re-creating a UI library in each repository, we decided to place our UI design library into
a single source of truth, that can be packaged, and installed in every project.

We have made it open source for a few reasons:

- **Help people build UI easier**. Anyone who is building a webapp and needing well built and lightweight UI components
  can easily get and use `julo-ui` in your project. Then, people can focus on building awesome functionalities quickly
  for their users.

- **Community Collaboration and Improvement**. We encourage the broeader community with your perspectives and ideas
  to enhance the library by adding more useful UI modules, making bug fixes, optimizing code where needed, and adding security enhancements.
  With this mindset, we hope the library can be better quicker.
- **Sharing how we build software**. Through various projects, we have learned the most effective technical design
  to building reusable UI components. Our hope is that people outside JULO can see our approach and mindset
  in building and design from our source code, apply the concepts in their own projects, and for those
  who are open for new opportunities will be interested to join our teams.

## Installation

To use JULO UI components, all you need to do is install the
`@julo-ui/react` package and its peer dependencies:

```sh
# with Yarn
$ yarn add @julo-ui/react @emotion/react@^11 @emotion/styled@^11

# with npm
$ npm i @julo-ui/react @emotion/react@^11 @emotion/styled@^11

# with pnpm
$ pnpm add @julo-ui/react @emotion/react@^11 @emotion/styled@^11
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `JuloProvider` provided by
   **@julo-ui/react**.

```jsx
import { JuloProvider } from '@julo-ui/react';

// Do this at the root of your application
function App({ children }) {
  return <JuloProvider>{children}</JuloProvider>;
}
```

2. Now you can start using components like so!:

```jsx
import { Button } from '@julo-ui/react';

function Example() {
  return <Button>I just consumed some Julo!</Button>;
}
```

## Contribute

1. Please fork this project first
2. Create a branch to push your changes
3. Open PR and put the title [component-name]-v[component-version]
4. Your PR will be reviewed by our team

## License

[MIT © Julo Web Frontend](https://github.com/julofinance/julo-ui/blob/master/LICENSE)
