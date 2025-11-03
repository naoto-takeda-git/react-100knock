import { useState } from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Toggle from "./components/Toggle";

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [theme, setTheme] = useState(0);

  const countUp = () => {
    setCount((prev) => prev + 1);
  };

  const modifyInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const changeTheme = () => {
    setTheme((prev) => (prev + 1) % 2);
  };

  return (
    <main
      style={
        theme === 1
          ? { backgroundColor: "black", color: "white", minHeight: "100vh" }
          : {
              backgroundColor: "transparent",
              color: "black",
              minHeight: "100vh",
            }
      }
    >
      <div>
        <p>count: {count}</p>
        <Counter onClick={countUp} />
      </div>
      <div>
        <p>inputValue: {inputValue}</p>
        <Input onInput={modifyInputValue} />
      </div>
      <div>{theme == 0 ? <p>theme: light</p> : <p>theme: dark</p>}</div>
      <Toggle toggleHandler={changeTheme} />
    </main>
  );
};

export default App;
