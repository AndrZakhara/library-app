import React, { Component } from 'react';

export class UnregistryUser extends Component {
  handleClick(e) {
    // console.log(e.target.value);
    e.preventDefault();
    this.props.handleTypePageEntry(e.target.value);
  }

  render() {
    return (
      <div>
        <button
          onClick={e => this.handleClick(e)}
          value="login"
        >
                    Log In
        </button>
        <button
          onClick={e => this.handleClick(e)}
          value="signUp"
        >
Sign Up
        </button>
      </div>
    );
  }
}
