import { useSelector, useDispatch } from 'react-redux/es/exports';
import classes from './Counter.module.css';

import { counterActions } from "../store/index"

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const visible = useSelector(state => state.isCounterVisible);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  const counterEl = <>
    <div className={classes.value}>{counter}</div>
      <div className={classes.actions}>
        <button onClick={decrementCounterHandler}>-</button>
        <button onClick={incrementCounterHandler}>+</button>
      </div>
  </>

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible && counterEl}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
