import { useState } from "react";

const Knock13 = () => {
  const [status, setStatus] = useState(false);

  const ToggleSwitch = () => {
    setStatus((prev) => !prev);
  };

  const buttonStyle = {
    backgroundColor: status ? "red" : "blue",
    padding: 20,
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  };
  return (
    <>
      <button onClick={ToggleSwitch} style={buttonStyle}>
        {status ? "アクティブ" : "非アクティブ"}
      </button>
    </>
  );
};

export default Knock13;
