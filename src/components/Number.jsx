import React, { Component } from 'react';

class Number extends Component {

  render() {
    return <button
      className="number"
      onClick={() => this.props.numberClick(this.props.initialState, this.props.value)}>
      {this.props.value}
    </button>;
  }

}
export default Number;