import {useSelector, useDispatch} from "react-redux"

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  const toggleCounterHandler = () => {
    dispatch({type: "toggle"})
  };

  const incrementHandler = () => {
    dispatch({type: "increment"})
  }

    const decrementHandler = () => {
    dispatch({type: "decrement"})
  }

  const increaseHandler = () => {
    dispatch({type: "increase", amount: 5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state.counterVisible && <div className={classes.value}>{state.counter}</div>}
      <div className={classes.buttons}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5 </button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
