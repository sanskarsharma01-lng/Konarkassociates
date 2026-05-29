import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App.jsx';

export function render(url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  return html;
}
