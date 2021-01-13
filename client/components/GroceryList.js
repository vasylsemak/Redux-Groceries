import React from "react";
import GroceryItem from "./GroceryItem";
import { connect } from "react-redux";

const ListComponent = props => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem key={grocery.id} {...grocery} />
    ))}
  </ul>
);

const mapStateToProps = state => ({ groceries: state.groceries });

const GroceryList = connect(mapStateToProps)(ListComponent);
export default GroceryList;
