import { useState, type MouseEvent } from "react";

const Knock17 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#fff");
  const [message, setMessage] = useState("クリックしてください");

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    setX(e.clientX);
    setY(e.clientY);
    setCount((prev) => prev + 1);
    setBgColor(e.shiftKey ? "#dbeafe" : "#fff");
    setMessage(
      e.shiftKey ? "Shiftキーを押しながらクリックしました" : "クリックしました",
    );
  };

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMessage("右クリックは禁止です");
  };

  const resetCount = () => {
    setCount(0);
    setMessage("カウンターをリセットしました");
  };

  return (
    <div
      onClick={clickHandler}
      onDoubleClick={resetCount}
      onContextMenu={handleContextMenu}
      style={{
        width: 600,
        height: 300,
        border: "1px solid #ccc",
        backgroundColor: bgColor,
        padding: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 8,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <div>
        クリック位置: ({x}, {y})
      </div>
      <div>クリック回数: {count}</div>
      <div>{message}</div>
      <div>Shiftキーを押しながらクリックすると背景色が変わります</div>
      <div>右クリックは禁止・ダブルクリックでリセット</div>
    </div>
  );
};

export default Knock17;
