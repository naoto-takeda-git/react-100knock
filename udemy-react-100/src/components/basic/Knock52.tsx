import { useState, useEffect } from "react";

type WindowSize = {
  width: number;
  height: number;
};

type UseWindowSizeReturn = WindowSize;

function useWindowSize(): UseWindowSizeReturn {
  // width, heightの状態管理
  // resizeイベントのリスナー登録
  // デバウンス処理の実装
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId: number | undefined;

    const resizeFunc = () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 300);
    };

    window.addEventListener("resize", resizeFunc);

    return () => {
      window.removeEventListener("resize", resizeFunc);
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return windowSize;
}

function Knock52() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Window Size Monitor</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: width > 768 ? "green" : "red",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {width > 768 ? "Desktop" : "Mobile"}
      </div>
    </div>
  );
}
export default Knock52;
