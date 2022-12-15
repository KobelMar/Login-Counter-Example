import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, counterVisible: true };

const counterSlice = createSlice({
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
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.counterVisible = !state.counterVisible;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
