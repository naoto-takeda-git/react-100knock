import { useState } from "react";

const Knock19 = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [keyPressCount, setKeyPressCount] = useState({
    Enter: 0,
    Escape: 0,
    Space: 0,
  });

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Enterキー
    if (e.key === "Enter") {
      setKeyPressCount((prev) => ({
        ...prev,
        Enter: prev.Enter + 1,
      }));

      if (inputValue.trim()) {
        setItems((prev) => [...prev, inputValue.trim()]);
        setInputValue("");
      }
    }

    // Escapeキー
    if (e.key === "Escape") {
      setKeyPressCount((prev) => ({
        ...prev,
        Escape: prev.Escape + 1,
      }));
      setInputValue("");
    }

    //　スペースキー
    if (e.key === " " || e.key === "Spacebar") {
      setKeyPressCount((prev) => ({
        ...prev,
        Space: prev.Space + 1,
      }));
    }

    // Ctrl + z
    if (e.ctrlKey && e.key === "z") {
      setItems((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enterで追加、Escでクリア、Ctrl+Zで削除"
        style={{ width: "300px", padding: "8px" }}
        aria-label="アイテム入力フィールド"
        maxLength={100}
        onKeyDown={keyDownHandler}
      />

      <ul>
        {items.map((item, index) => {
          return <li key={`${item}-${index}`}>{item}</li>;
        })}
      </ul>

      <div>
        <h4>キー押下回数:</h4>
        <p>Enter: {keyPressCount.Enter}回</p>
        <p>Escape: {keyPressCount.Escape}回</p>
        <p>Space: {keyPressCount.Space}回</p>
      </div>
    </div>
  );
};

export default Knock19;
