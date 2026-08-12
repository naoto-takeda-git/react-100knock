import { useState } from "react";

const Knock31 = () => {
  const [fruits] = useState([
    "りんご",
    "バナナ",
    "オレンジ",
    "ぶどう",
    "いちご",
  ]);

  return (
    <div>
      <h2>果物リスト</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {index + 1}. {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Knock31;
