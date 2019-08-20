import React from "react";
import ReactDOM from "react-dom";

//This is our  persistor that we will wrap our app in , and pass in our persistor in store.js as an attr..this gives our app component the context of our new persisted reducer
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux/store";

//note wrap your browser router around your application
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

ReactDOM.render(
  //provider is a parent that wraps our app, it allows us to get access to a all of the things related to the store
  <Provider store={store}>
    {/* browserRouter tag gives the functionality of routing to our app tag, thats why its being wrapped with it */}
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
