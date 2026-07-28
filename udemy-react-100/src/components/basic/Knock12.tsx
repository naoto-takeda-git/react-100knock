import { useState } from "react";
import type { ChangeEvent } from "react";

const Knock12 = () => {
  const [text, setText] = useState("");

  const change = (e: ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" className="text" value={text} onChange={change} />
      <p>入力値：{text}</p>
      <p>文字数：{text.length}</p>
    </div>
  );
};

export default Knock12;
