import React from "react";
import ReactDOM from "react-dom";

//note wrap your browser router around your application
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import store from "./redux/store";

ReactDOM.render(
  //provider is a parent that wraps our app, it allows us to get access to a all of the things related to the store
  <Provider store={store}>
    {/* browserRouter tag gives the functionality of routing to our app tag, thats why its being wrapped with it */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
