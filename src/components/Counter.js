import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: , payload: 5}
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterState.counterVisible && (
        <div className={classes.value}>{counterState.counter}</div>
      )}
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
