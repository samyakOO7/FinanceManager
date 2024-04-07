import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FadeInTextProvider } from './components/FadeInText/WithFadeInTransition';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);