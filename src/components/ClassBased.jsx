import React, { Component } from 'react';

//*What is reconcilation?

export default class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor: initialized');
  }

  // Mounting
  componentDidMount() {
    console.log('componentDidMount: mounted');
  }

  // Updating
  componentDidUpdate() {
    console.log('componentDidUpdate: updated');
  }

  // Unmounting
  componentWillUnmount() {
    console.log('componentWillUnmount: unmounted');
  }

  render() {
    return (
      <>
        <h4>This is class based component</h4>
        <h6>This is total count: {this.state.count}</h6>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increase!</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Decrease!</button>
      </>
    );
  }
}
