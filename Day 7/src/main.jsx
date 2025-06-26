import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the /client
import App from './App.jsx'; // Your main App component that contains RecoilRoot

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
