import { useEffect, useState } from "react";

type AspectRatio = "正方形" | "縦長" | "横長";

const Knock38 = () => {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const [area, setArea] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("正方形");
  const [sizeHistory, setSizeHistory] = useState<string[]>([]);

  useEffect(() => {
    // 幅と高さの変更を監視
    // 1. 面積を計算
    // 2. アスペクト比を判定
    // 3. 履歴に追加（最新5件）
    const calculatedArea = width * height;
    setArea(calculatedArea);

    if (width === height) {
      setAspectRatio("正方形");
    } else if (width > height) {
      setAspectRatio("横長");
    } else {
      setAspectRatio("縦長");
    }

    setSizeHistory((prev) => [
      `${width} × ${height}（面積: ${calculatedArea}）`,
      ...prev.slice(0, 4),
    ]);
  }, [width, height]);

  return (
    <div>
      <h2>寸法計算機</h2>

      <div>
        <label>
          幅:
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <label>
          高さ:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <p>面積: {area}</p>
        <p>形状: {aspectRatio}</p>
      </div>

      <div>
        <h3>変更履歴（最新5件）:</h3>
        <ul>
          {sizeHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Knock38;
