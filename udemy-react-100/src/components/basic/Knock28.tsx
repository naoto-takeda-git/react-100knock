import { useState, type ChangeEvent } from "react";

type UserRoleType = "guest" | "user" | "admin";

const Knock28 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRoleType>("guest"); // guest, user, admin
  const [showDetails, setShowDetails] = useState(false);

  const handleLoggedInStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoggedIn(e.target.checked);
    if (!e.target.checked) {
      setShowDetails(false);
    }
  };

  const handleUserRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserRole(e.target.value as UserRoleType);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>権限管理システム</h2>

      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          border: "1px solid #ddd",
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={isLoggedIn}
            onChange={handleLoggedInStatus}
          />
          ログイン状態
        </label>

        <label style={{ marginLeft: "20px" }}>
          権限レベル:
          <select style={{ marginLeft: "5px" }} onChange={handleUserRoleChange}>
            <option value="guest">ゲスト</option>
            <option value="user">一般ユーザー</option>
            <option value="admin">管理者</option>
          </select>
        </label>

        {isLoggedIn && userRole === "admin" && (
          <label style={{ display: "block", marginTop: "12px" }}>
            <input
              type="checkbox"
              checked={showDetails}
              onChange={(e) => setShowDetails(e.target.checked)}
            />
            詳細表示
          </label>
        )}
      </div>

      {/* 基本情報（全員表示） */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          margin: "10px 0",
        }}
      >
        <h3>公開情報</h3>
        <p>誰でも見られる情報です</p>
      </div>

      {/* ログインユーザーのみ */}
      {isLoggedIn && <p>ログインユーザー専用</p>}

      {/* 一般ユーザー以上 */}
      {isLoggedIn && (userRole === "user" || userRole === "admin") && (
        <p>一般ユーザー以上に見える情報です</p>
      )}

      {/* 管理者のみ */}
      {userRole === "admin" && <p>管理者のみ見える情報です</p>}

      {/* 管理者でかつ詳細表示ON */}
      {userRole === "admin" && showDetails && (
        <div
          style={{
            border: "1px solid #8e44ad",
            padding: "10px",
            marginTop: "10px",
            backgroundColor: "#f6eaff",
          }}
        >
          <p>管理者用詳細情報（詳細表示ON）</p>
          <p>ユーザー数: 128</p>
          <p>システム状態: 正常</p>
        </div>
      )}
    </div>
  );
};

export default Knock28;
