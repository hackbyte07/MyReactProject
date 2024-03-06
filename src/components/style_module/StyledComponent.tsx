import React from "react";
import styles from "./StyledComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import counterSlice, {
  CounterInitialState,
  decrement,
  increment,
} from "../../redux/counter_slice/counterSlice";

const StyledComponent = () => {
  const counterSelector = useSelector<RootState>(
    (state) => state.counterSlice
  ) as CounterInitialState;

  const appDispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.container}>
      <h2 className={styles.text}>Styled Component</h2>
      <p className={styles.text}>
        This component uses CSS Modules for styling.
      </p>
      <p>Count: {counterSelector.value}</p>
      <button
        onClick={() => {
          appDispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          appDispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default StyledComponent;
