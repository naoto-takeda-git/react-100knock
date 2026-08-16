import { useEffect, useState } from "react";

type WindowSize = {
  width: number;
  height: number;
};

const Knock42 = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  useEffect(() => {
    // リサイズイベント
    const handleResize = () => {
      // ウィンドウサイズを更新
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize({
        width,
        height,
      });
    };

    // スクロールイベント
    const handleScroll = () => {
      // スクロール位置を更新
      setScrollPosition(window.scrollY);
    };

    // キーボードイベント
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S で保存処理
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        setLastSaved(`最終保存日時: ${new Date().toLocaleDateString()}`);
      }
    };

    // イベントリスナー登録
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    // クリーンアップ
    return () => {
      // 全てのイベントリスナーを削除
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div style={{ minHeight: "150vh" }}>
      <h2>イベントリスナー管理</h2>

      <div className="info-panel">
        <p>
          ウィンドウサイズ: {windowSize.width} x {windowSize.height}
        </p>
        <p>スクロール位置: {scrollPosition}px</p>
        <p>最終保存: {lastSaved || "未保存"}</p>
        <p className="hint">Ctrl+Sで保存</p>
      </div>

      <div style={{ marginTop: "100px" }}>
        <p>スクロールして位置を確認してください</p>
      </div>
    </div>
  );
};

export default Knock42;
