import { useState } from "react";

const Knock26 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("ゲスト");

  const handleLogin = () => {
    setUsername("田中太郎");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("ゲスト");
  };

  return (
    <div>
      <h2>ログイン状態管理</h2>

      {/* ログイン時のみユーザー情報を表示 */}
      {isLoggedIn && (
        <div>
          <p>ログイン名：{username}</p>
          <button onClick={handleLogout}>ログアウト</button>
        </div>
      )}

      {/* 未ログイン時のみログインボタンを表示 */}
      {!isLoggedIn && (
        <div>
          <p>ゲストユーザーとしてアクセスしています。</p>
          <button onClick={handleLogin}>ログイン</button>
        </div>
      )}
    </div>
  );
};

export default Knock26;
