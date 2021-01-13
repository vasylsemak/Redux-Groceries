import React, { Component } from "react";

class AddGrocery extends Component {
  constructor() {
    super();
    this.state = { input: "" };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleEnter(evt) {
    if(evt.key === "Enter") {
      console.log("KKK+> ", this.state.input)
      // this.props.add(this.state.input);
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

export default AddGrocery;
