import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>Day1：カウンター</h1>
      <p>カウント数：{count}</p>
      <button onClick={countUp}>add</button>
    </>
  );
};

export default App;
