import { useState } from "react";

const Knock16 = () => {
  const [lastClicked, setLastClicked] = useState("なし");

  const clickHandler = (buttonNam: string) => {
    alert(`${buttonNam}が押されました`);
    setLastClicked(buttonNam);
  };

  return (
    <>
      <p>{lastClicked}</p>
      <button onClick={() => clickHandler("ボタン1")}>ボタン1</button>
      <button onClick={() => clickHandler("ボタン2")}>ボタン2</button>
      <button onClick={() => clickHandler("ボタン3")}>ボタン3</button>
    </>
  );
};

export default Knock16;
