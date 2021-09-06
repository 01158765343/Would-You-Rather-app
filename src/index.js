import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"
import { Provider } from 'react-redux';
import rootReducer from './reducer/rootReducr';
import middleware from './midleware'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(rootReducer,middleware)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
