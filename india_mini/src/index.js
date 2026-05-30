import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// This disables the red error overlay in your browser
window.addEventListener('error', (e) => {
  if (e.message === 'Script error.') {
    const resizeObserverErrDiv = document.getElementById('webpack-dev-server-client-overlay-div');
    if (resizeObserverErrDiv) resizeObserverErrDiv.style.display = 'none';
  }
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
