import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeName = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setName(e.target.value);
  };
  const onChangeEmail = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEmail(e.target.value);
  };
  const onChangeMessage = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setMessage(e.target.value);
  };

  const buttonClick = () => {
    alert(`name: ${name} email: ${email} message: ${message}`);
  };
  return (
    <div>
      <div>
        <p>氏名: {name}</p>
        <p>メールアドレス: {email}</p>
        <p>メッセージ: {message}</p>
      </div>
      <div>
        <div>
          <label htmlFor="name">氏名：</label>
          <input id="name" type="text" value={name} onChange={onChangeName} />
        </div>
        <div>
          <label htmlFor="email">メールアドレス：</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="message">メッセージ：</label>
          <input
            id="message"
            type="text"
            value={message}
            onChange={onChangeMessage}
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
