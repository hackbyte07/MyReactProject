import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counter_slice/counterSlice";
import todoSlice from "../todo_slice/todoSlice";

const rootReducer = combineReducers({
  counterSlice,
  todoSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
