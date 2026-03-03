import { useEffect, useState } from "react";
import CounterButton from "./components/CounterButton";

const App = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const total = countA + countB;

  // useEffect(() => {
  //   total = countA + countB;
  // }, [countA, countB]);

  const countUpA = () => {
    setCountA((prev) => prev + 1);
  };
  const countUpB = () => {
    setCountB((prev) => prev + 1);
  };

  const resetAll = () => {
    setCountA(0);
    setCountB(0);
  };

  return (
    <div>
      <div>
        <h3>カウンター表示</h3>
        <p>{countA}</p>
        <p>{countB}</p>
        <p>total : {total}</p>
        <h3>アクションボタン</h3>
        <CounterButton buttonName="A:カウントアップ" action={countUpA} />
        <CounterButton buttonName="B:カウントアップ" action={countUpB} />
        <CounterButton buttonName="リセット！！" action={resetAll} />
      </div>
    </div>
  );
};

export default App;
