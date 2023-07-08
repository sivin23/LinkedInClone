import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counter_reducer/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
