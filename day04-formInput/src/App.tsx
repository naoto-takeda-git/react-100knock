import { useState } from "react";

const App = () => {
  const [obj, setObj] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setObj((prev) => ({ ...prev, [name]: value }));
  };

  const buttonClick = () => {
    alert(`name: ${obj.name} email: ${obj.email} message: ${obj.message}`);
  };
  return (
    <div>
      <div>
        <p>氏名: {obj.name}</p>
        <p>メールアドレス: {obj.email}</p>
        <p>メッセージ: {obj.message}</p>
      </div>
      <div>
        <div>
          <label htmlFor="name">氏名：</label>
          <input
            id="name"
            type="text"
            name="name"
            value={obj.name}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス：</label>
          <input
            id="email"
            type="text"
            name="email"
            value={obj.email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="message">メッセージ：</label>
          <input
            id="message"
            type="text"
            name="message"
            value={obj.message}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <button onClick={buttonClick}>発火！！</button>
      </div>
    </div>
  );
};

export default App;
