import { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

  incrementHandler() {
    this.props.increment();
  };

  decrementHandler() {
    this.props.decrement();
  };

  render() {
    return (
      <Fragment>
        <h2>Redux counter</h2>
        <h2>Counter: {this.props.counter}</h2>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      </Fragment>
    ) 
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);