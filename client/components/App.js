import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AddGrocery from "./AddGrocery";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

const groceries = [{ id: 1, text: "Milk", bought: false }];

const App = () => (
  <Router>
    <div className="app">
      <img src="groceries.png" alt="Groceries" width="500" />
      <div className="list">
        <Route path="/" component={AddGrocery} />
        <Route path="/" render={(props) => <GroceryList groceries={groceries}/>}  />
        <Route path="/" component={Footer} />
      </div>
    </div>
  </Router>
);

export default App;
