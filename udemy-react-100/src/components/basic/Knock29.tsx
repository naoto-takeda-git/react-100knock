import "./styles/Knock29.css";
import { useState } from "react";

type StatusType = "success" | "warning" | "error" | "info";

type SizeType = "small" | "medium" | "large";

const Knock29 = () => {
  const [status, setStatus] = useState<StatusType>("info"); // success, warning, error, info
  const [isAnimated, setIsAnimated] = useState(false);
  const [size, setSize] = useState<SizeType>("medium"); // small, medium, large

  const getStatusIcon = () => {
    // ステータスに応じたアイコンを返す
    switch (status) {
      case "success":
        return "✓"; // チェックマーク
      case "warning":
        return "⚠"; // 警告マーク
      case "error":
        return "✕"; // バツマーク
      case "info":
        return "ℹ"; // 情報マーク
      default:
        return "?"; // 疑問符
    }
  };

  const badgeClassName = [
    "badge",
    /* 条件に応じてクラスを追加 */
    /* ステータス */
    status === "success" && "badge-success",
    status === "warning" && "badge-warning",
    status === "error" && "badge-error",
    status === "info" && "badge-info",
    /* サイズ */
    size === "small" && "badge-small",
    size === "medium" && "badge-medium",
    size === "large" && "badge-large",
    /* アニメーション */
    isAnimated && "animated",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <h3>ステータスバッジ</h3>

      <div className="controls">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as StatusType)}
        >
          <option value="success">成功</option>
          <option value="warning">警告</option>
          <option value="error">エラー</option>
          <option value="info">情報</option>
        </select>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value as SizeType)}
        >
          <option value="small">小</option>
          <option value="medium">中</option>
          <option value="large">大</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={isAnimated}
            onChange={(e) => setIsAnimated(e.target.checked)}
          />
          アニメーション
        </label>
      </div>

      <div className={badgeClassName}>
        <span>{getStatusIcon()}</span>
        <span>{status.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default Knock29;
