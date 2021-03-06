import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AddGrocery from "./AddGrocery";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const App = () => (
  <Router>
    <div className="app">
      <img src="groceries.png" alt="Groceries" width="500" />
      <div className="list">
        <Route path="/" component={AddGrocery} />
        <Route path="/" component={GroceryList} />
        <Route path="/" component={Footer} />
      </div>
    </div>
  </Router>
);

export default App;
