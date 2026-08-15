import { useEffect, useState } from "react";

const Knock37 = () => {
  const [count, setCount] = useState<number>(0);
  const [changeCount, setChangeCount] = useState<number>(0);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    // countの変更を監視
    // 1. 変更回数を増やす
    // 2. 履歴に追加
    // 3. 5の倍数チェック

    if (count === 0) {
      return;
    }

    setChangeCount((prev) => prev + 1);

    const timestamp = new Date().toLocaleTimeString();
    setHistory((prev) => [...prev, `${timestamp}: ${count}`]);

    if (count % 5 === 0) {
      alert("5の倍数です！！");
    }
  }, [count]);

  return (
    <div>
      <h2>状態変更の監視</h2>
      <p>カウント: {count}</p>
      <p>変更回数: {changeCount}</p>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>

      <div>
        <h3>履歴:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Knock37;
