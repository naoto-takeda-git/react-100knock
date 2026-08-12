import "./styles/Knock32.css";
import { useState } from "react";

type UserType = {
  id: number;
  name: string;
  age: number;
  email: string;
};
const Knock32 = () => {
  const [users] = useState<UserType[]>([
    { id: 1, name: "田中太郎", age: 25, email: "tanaka@example.com" },
    { id: 2, name: "鈴木花子", age: 18, email: "suzuki@example.com" },
    { id: 3, name: "佐藤次郎", age: 65, email: "sato@example.com" },
    { id: 4, name: "高橋美咲", age: 32, email: "takahashi@example.com" },
  ]);

  const getAgeColor = (age: number): string => {
    // 年齢に応じた背景色を返す
    if (age < 20) {
      return "#f79191";
    } else if (age < 60) {
      return "#96f496";
    } else {
      return "#a6a6fc";
    }
  };

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <div className="user-cards">
        {users.map((user) => (
          <div
            className="user-card"
            key={user.id}
            style={{ backgroundColor: getAgeColor(user.age) }}
          >
            <h4>{user.name}</h4>
            <p>{user.age}</p>
            <a href={user.email} className="email-link">
              {user.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knock32;
