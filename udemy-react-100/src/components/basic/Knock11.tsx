import { useState } from "react";

const Knock11 = () => {
  const INIT_COUNT = 10;
  const [count, setCount] = useState(INIT_COUNT);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const sub = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(INIT_COUNT);
  };

  return (
    <>
      <div>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={reset}>リセット</button>
      </div>
      <div>
        <p>カウント：{count}</p>
      </div>
    </>
  );
};

export default Knock11;
