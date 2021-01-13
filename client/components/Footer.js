import React from "react";
import { connect } from "react-redux";
import { setFilter, SHOW_BOUGHT, SHOW_ACTIVE, SHOW_ALL } from "../store/grocery-store";

const FooterClass = (props) => (
  <div className="footer">
    <button onClick={() => props.filter(SHOW_ALL)}>All</button>
    <button onClick={() => props.filter(SHOW_ACTIVE)}>Active</button>
    <button onClick={() => props.filter(SHOW_BOUGHT)}>Bought</button>
  </div>
);

const mapDispatch = dispatch => ({
  filter: (filterType) => dispatch(setFilter(filterType))
});

const Footer = connect(null, mapDispatch)(FooterClass);
export default Footer;
