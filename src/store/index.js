import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, counterVisible: true };

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.counterVisible = !state.counterVisible;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      counterVisible: state.counterVisible,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      counterVisible: state.counterVisible,
    };
  }
  if (action.type === "toggle") {
    return { ...state, counterVisible: !state.counterVisible };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
