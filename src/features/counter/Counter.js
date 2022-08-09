import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  deleteValue,
  incrementByAmount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(deleteValue())}
        >
          delete
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(4))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  );
}
