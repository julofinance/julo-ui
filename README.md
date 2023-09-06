<div align="center">
  <a href="https://github.com/julofinance/julo-ui">
    <h1 align='center'>Julo UI</h1>
  </a>
</div>

<div align="center">
  <a href="https://github.com/julofinance/julo-ui/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/julofinance/julo-ui"/>
  </a>
</div>

## Table of contents

- 📦 [Installation](#installation)
- 💻 [Usage](#usage)
- ⚖️ [License](#license)

## Installation

To use Julo UI components, all you need to do is install the
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

## License

[MIT © Julo Web Frontend](https://github.com/julofinance/julo-ui/blob/master/LICENSE)
