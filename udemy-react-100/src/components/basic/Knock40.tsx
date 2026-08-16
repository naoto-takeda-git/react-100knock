import { useEffect, useState } from "react";

const Knock40 = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    // デバウンス処理を実装
    // 1. 入力中フラグを立てる
    // 2. タイマーを設定（500ms）
    // 3. タイマー完了後に検索実行
    // クリーンアップでタイマーをクリア

    setIsTyping(true);

    const timerId = setTimeout(() => {
      // 検索文字の設定
      setSearchTerm(inputValue);

      // 入力中フラグを落とす
      setIsTyping(false);
    }, 1000);

    // クリーンアップ関数：タイマーをクリア
    return () => clearTimeout(timerId);
  }, [inputValue]);

  useEffect(() => {
    // 実際の検索処理
    if (searchTerm) {
      // 検索を実行（シミュレーション）
      // 検索回数を増やす
      // 履歴に追加
      if (searchTerm) {
        console.log(`検索文字：${searchTerm}`);
        setSearchCount((prev) => prev + 1);
        setSearchHistory((prev) => [...prev, `検索文字：${searchTerm}`]);
      }
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>デバウンス検索</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="検索キーワードを入力..."
      />

      {isTyping && <span>入力中...</span>}

      <div>
        <p>検索キーワード: {searchTerm}</p>
        <p>検索実行回数: {searchCount}</p>
      </div>

      <div>
        <h3>検索履歴:</h3>
        <ul>
          {searchHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Knock40;
