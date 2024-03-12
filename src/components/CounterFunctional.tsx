import React, { useState } from "react";

const CounterFunctional = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
 
};


export default CounterFunctional;
