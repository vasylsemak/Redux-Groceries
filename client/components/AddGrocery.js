import React, { Component } from "react";
import { connect } from "react-redux";
import { addGrocery } from "../store";

class AddGroceryComp extends Component {
  constructor() {
    super();
    this.state = { input: "" };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEnter(evt) {
    if(evt.key === "Enter") {
      this.props.add(this.state.input);
      this.setState({ input: "" });
    }
  }

  handleClick(evt) {
    evt.preventDefault;
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div className="add-grocery">
        <input
          type="text"
          value={this.state.input}
          onChange={evt => this.setState({ input: evt.target.value })}
          onKeyDown={this.handleEnter}
        />
        <button onClick={this.handleClick}>Add Grocery</button>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  add: (text) => dispatch(addGrocery(text))
});

const AddGrocery = connect(null, mapDispatchToProps)(AddGroceryComp);
export default AddGrocery;
