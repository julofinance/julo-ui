import React from 'react';
import ReactDOM from 'react-dom/client';

import { JuloProvider } from '@julo-ui/react';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <JuloProvider>
      <App />
    </JuloProvider>
  </React.StrictMode>,
);
