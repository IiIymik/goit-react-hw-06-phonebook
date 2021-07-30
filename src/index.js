import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import './utils/nanoid.js';
import store from './redux/store.js';
import { saveContact } from './redux/actions.js';
console.log('🚀 ~ file: index.js ~ line 7 ~ store', store.getState());

store.dispatch(saveContact(10));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
