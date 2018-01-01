import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        React Simple Starter2.2
        {this.props.children}
      </div>
    );
  }
}
