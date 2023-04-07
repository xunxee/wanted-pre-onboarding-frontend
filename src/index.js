import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { Global } from '@emotion/react';

import resetStyles from './styles/reset';

ReactDOM.createRoot(document.getElementById('app')).render(
  <>
    <Global styles={resetStyles} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
);
