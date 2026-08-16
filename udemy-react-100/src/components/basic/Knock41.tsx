import { useEffect, useState } from "react";

const Knock41 = () => {
  const INITIAL_COUNT = 10;
  const [seconds, setSeconds] = useState(INITIAL_COUNT);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number;

    if (isRunning && seconds > 0) {
      // タイマーを開始
      intervalId = setInterval(() => {
        // 1秒ずつ減らす
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0 && isRunning) {
      // 0になったらアラート
      setIsRunning(false);
      alert("タイマー");
    }

    // クリーンアップ関数
    return () => {
      // タイマーをクリア
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [seconds, isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(INITIAL_COUNT);
  };

  return (
    <div>
      <h2>カウントダウンタイマー</h2>
      <div className="timer-display">
        <h1>
          {Math.floor(seconds / 60)}:
          {(seconds % 60).toString().padStart(2, "0")}
        </h1>
      </div>

      <div className="controls">
        <button onClick={handleStart} disabled={isRunning || seconds === 0}>
          スタート
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          ストップ
        </button>
        <button onClick={handleReset}>リセット</button>
      </div>
    </div>
  );
};

export default Knock41;
