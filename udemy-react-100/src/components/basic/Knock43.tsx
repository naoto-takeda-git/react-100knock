import "./styles/Knock43.css";
import { useEffect, useState } from "react";

type AddressGeo = {
  lat: string;
  lng: string;
};
type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressGeo;
};
type UserCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company?: UserCompany;
};

const Knock43 = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // API通信を実装
        // https://jsonplaceholder.typicode.com/users
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("ユーザー取得に失敗しました");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        // エラーハンドリング
        setError(err instanceof Error ? err.message : "通信に失敗しました");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [retryCount]); // リトライ時に再実行

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
  };

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return (
      <div>
        <p>エラー: {error}</p>
        <button onClick={handleRetry}>リトライ ({retryCount})</button>
      </div>
    );
  }

  return (
    <div>
      <h2>ユーザー一覧</h2>
      <button onClick={handleRetry}>再読み込み</button>

      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knock43;
