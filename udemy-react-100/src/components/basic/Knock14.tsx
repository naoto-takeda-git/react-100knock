import { useState, type ChangeEvent, type MouseEvent } from "react";

const Knock14 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [isDisplay, setIsDisplay] = useState(false);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    setIsDisplay(true);
  };

  const changeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const changeAge = (e: ChangeEvent<HTMLInputElement>): void => {
    setAge(Number(e.target.value));
  };
  const changeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const reset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setAge(0);
    setIsDisplay(false);
  };

  return (
    <>
      <form>
        <div>
          氏名：
          <input
            type="text"
            className="name"
            value={name}
            onChange={changeName}
          />
        </div>
        <div>
          メールアドレス：
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div>
          年齢：
          <input
            type="number"
            className="age"
            value={age}
            onChange={changeAge}
          />
        </div>

        <button onClick={handleSubmit}>送信</button>
        <button onClick={reset}>リセット</button>
      </form>

      {isDisplay ? (
        <div>
          <p>氏名：{name}</p>
          <p>メールアドレス：{email}</p>
          <p>年齢：{age}</p>
        </div>
      ) : null}
    </>
  );
};

export default Knock14;
