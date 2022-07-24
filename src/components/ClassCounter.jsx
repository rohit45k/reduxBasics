import { Component } from "react";
import { connect } from "react-redux";
import classes from './Counter.module.css';

class ClassCounter extends Component {

    decrementCounterHandler() {
        this.props.decrement();
    }

    incrementCounterHandler() {
        this.props.increment();
    }

    toggleCounterHandler() {

    }

    render() {
        return (
            <main className={classes.counter}>
              <h1>Redux Class Counter</h1>
              <div className={classes.value}>{this.props.counter}</div>
              <div className={classes.actions}>
                <button onClick={this.decrementCounterHandler.bind(this)}>-</button>
                <button onClick={this.incrementCounterHandler.bind(this)}>+</button>
              </div>
              <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
          );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}


const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INCREMENT'}),
        decrement: () => dispatch({ type: 'DECREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter)