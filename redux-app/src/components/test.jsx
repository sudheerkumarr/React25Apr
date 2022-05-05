import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h1>Test Page</h1>
      {count}
    </div>
  );
};

export default Test;
