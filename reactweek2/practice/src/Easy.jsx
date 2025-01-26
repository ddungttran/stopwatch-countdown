import React, { useState } from "react";

function Easy() {
  const [count, setCount] = useState(0);

  return (
    <div className="easy">
      <h2>Easy Page</h2>
      <h3>Counter: {count}</h3>
      <div className="counter-buttons">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}

export default Easy;
