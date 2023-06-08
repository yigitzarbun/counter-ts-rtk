import { ChangeEvent, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  decrement,
  increment,
  increaseByValue,
  reset,
} from "../features/counterSlice";
import styles from "./Counter.module.css";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const [increaseValue, setIncreaseValue] = useState(0);
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(increment());
    setIncreaseValue(0);
  };
  const handleDecrement = () => {
    dispatch(decrement());
    setIncreaseValue(0);
  };
  const handleIncreaseValue = (e: ChangeEvent<HTMLInputElement>) => {
    setIncreaseValue(Number(e.target.value) || 0);
  };
  const handleIncrementByValue = () => {
    dispatch(increaseByValue(increaseValue));
  };
  const handleReset = () => {
    dispatch(reset());
    setIncreaseValue(0);
  };
  return (
    <div>
      <h1>{`Count: ${count}`}</h1>
      <div className={styles.increaseDecreaseButtons}>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="number"
          value={increaseValue}
          onChange={handleIncreaseValue}
          className={styles.input}
        />
        <button onClick={handleIncrementByValue}>Increase</button>
      </div>
      <button onClick={handleReset} className={styles.resetButton}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
