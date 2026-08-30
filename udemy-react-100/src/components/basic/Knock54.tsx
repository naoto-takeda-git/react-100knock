import { useState, useEffect } from "react";

function useClipboard(resetTimeout = 2000) {
  // isCopied, error状態の管理
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<string | null>();

  // copyToClipboard関数の実装
  const copyToClipboard = async (text: string) => {
    try {
      setError(null);
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (err) {
      setIsCopied(false);
      setError((err as Error).message);
    }
  };

  // タイムアウト処理
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, resetTimeout);

      return () => clearTimeout(timer);
    }
  }, [isCopied, resetTimeout]);

  return { copyToClipboard, isCopied, error };
}

function Knock54() {
  const { copyToClipboard, isCopied, error } = useClipboard(1000);
  const [text, setText] = useState("Hello, World!");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "300px" }}
      />
      <button onClick={() => copyToClipboard(text)}>
        {isCopied ? "✓ Copied!" : "Copy to Clipboard"}
      </button>
      {error && <p style={{ color: "red" }}>Failed to copy: {error}</p>}

      <div style={{ marginTop: "20px" }}>
        <p>Try pasting the copied text here:</p>
        <textarea
          placeholder="Paste here to test"
          style={{ width: "300px", height: "100px" }}
        />
      </div>
    </div>
  );
}

export default Knock54;
