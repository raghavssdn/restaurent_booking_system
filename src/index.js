import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/commonstore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);