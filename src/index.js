import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Cars-for-rent-in-Ukraine">
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
);
