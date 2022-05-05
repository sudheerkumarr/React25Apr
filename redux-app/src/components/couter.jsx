import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counteractions";

export const Counter = () => {
  //   const [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount(count + 1);
  //   };
  //   const decrement = () => {
  //     setCount(count - 1);
  //   };
  // Get count value from store
  const count = useSelector((state) => state.count);

  // dispatch action
  const dispatch = useDispatch();

  return (
    <div className="w-25 mx-auto">
      <h1>Counter Page</h1>
      <i
        className="bi bi-dash-circle me-2"
        onClick={() => dispatch(decrement())}
      ></i>
      {count}
      <i
        className="bi bi-plus-circle ms-2"
        onClick={() => dispatch(increment())}
      ></i>
    </div>
  );
};
