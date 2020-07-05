import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./containers/app";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createReducer from "./reducer";
import { createEpicMiddleware } from "redux-observable";
import { rootEpic } from "./epic";
import { init } from "./containers/app/actions";

const reducer = createReducer();
const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(rootEpic);
store.dispatch(init());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
