import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './Components/ErrorBoundary';

import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
