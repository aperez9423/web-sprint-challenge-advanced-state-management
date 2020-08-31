import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { smurfReducer } from './reducers/smurfReducer';
import { Provider } from 'react-redux';

import "./index.css";
import App from "./components/App";

let store = createStore(smurfReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
 document.getElementById("root"));
