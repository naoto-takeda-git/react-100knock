import { useState } from "react";

const Knock27 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const containerStyle = {
    backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
    color: isDarkMode ? "#ffffff" : "#000000",
    minHeight: "200px",
    padding: "20px",
    transition: "all 1s ease",
  };

  return (
    <div style={containerStyle}>
      <h2>{isDarkMode ? "ようこそ闇のデュエルへ" : "ようこそ救済の地へ"}</h2>

      <p>現在のテーマ: {isDarkMode ? "ダーク" : "ホワイト"}</p>

      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          backgroundColor: isDarkMode ? "white" : "black",
          color: isDarkMode ? "black" : "white",
          padding: "20px 10px",
          borderRadius: "10px",
        }}
      >
        {isDarkMode ? "ホワイトモード" : "ダークモード"}に変更
      </button>
    </div>
  );
};

export default Knock27;
