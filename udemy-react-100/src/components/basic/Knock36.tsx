import { useEffect, useState } from "react";

const Knock36 = () => {
  const [mountTime, setMountTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // マウント時の処理を記述
    // 1. コンソールにログ出力
    console.log("ログ出力：初期表示処理");

    // 2. メッセージを設定
    setMessage("初期表示処理時に設定しています。");

    // 3. ページタイトルを変更
    document.title = "React Challeng";

    // return () => {
    //   console.log("コンポーネントがアンマウントされました。");
    // };
  }, []); // 空の依存配列

  return (
    <div>
      <h2>マウント時の処理</h2>
      <p>メッセージ: {message}</p>
    </div>
  );
};

export default Knock36;
