import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

import ShopPage from './pages/shop/shop.component.jsx'


function App() {
  return (
    <div>
      {/* if switch sees a route that does not have exact attribute, it will render only the route that match / */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
