# ThemeProvider

Provider to provide default config of style that is used by @julofinance/react-components

## Usage example

### Integration

#### NextJS

```tsx
./src/pages/_app.tsx

import { ThemeProvider } from '@julofinance/react-components';

export default function App({ Component, pageProps }: AppProps) {
 return (
  <ThemeProvider>
    <Component {...pageProps}/>
  </ThemeProvider>
 );
}
```

#### CRA (Create React App)

```tsx
./src/index.tsx

import { ThemeProvider } from '@julofinance/react-components';
...

ReactDOM.render(
 <ThemeProvider>
   <App/>
 </ThemeProvider>
)
```

### Extend theme

```tsx
import { ThemeProvider, extendsTheme } from '@julofinance/react-components';

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendsTheme({
    colors: {
      primary: {
        10: 'red',
      },
    },
  });

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
```

or

```tsx
import { ThemeProvider, extendsTheme } from '@julofinance/react-components';

export default function App({ Component, pageProps }: AppProps) {
 const theme = extendsTheme((defaultTheme) => {
  colors: {
    primary: {
      ...defaultTheme.colors.primary
      10: 'red',
    }
  }
 })

 return (
  <ThemeProvider>
    <Component {...pageProps}/>
  </ThemeProvider>
 );
}
```

### useTheme

⚠️ Please use within `ThemeProvider` ⚠️

```tsx
import { useTheme } from '@julofinance/react-components';

export default function Home() {
  const { colors, lineHeights, fontSizes } = useTheme();

  return <></>;
}
```
