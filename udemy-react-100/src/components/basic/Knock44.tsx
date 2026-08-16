import { useEffect, useState } from "react";

type Repository = {
  id: number;
  html_url: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
};

type GithubSearchResult = {
  items: Repository[];
};

const Knock44 = () => {
  const [query, setQuery] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // AbortControllerを作成
    const controller = new AbortController();

    const searchRepositories = async () => {
      if (!query.trim()) {
        setRepositories([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // GitHub API を呼び出し
        // https://api.github.com/search/repositories?q={query}
        // signalを渡してキャンセル可能にする
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("通信に失敗しました");
        }

        const result: GithubSearchResult = await response.json();

        setRepositories(result.items);
      } catch (err) {
        // キャンセルエラーと通常のエラーを区別
        if (err instanceof Error && err.name === "AbortError") {
          return;
        } else {
          setError(
            err instanceof Error
              ? err.message
              : "予期せぬエラーが発生しました。",
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    // デバウンス処理
    const timeoutId = setTimeout(() => {
      searchRepositories();
    }, 500);

    // クリーンアップ
    return () => {
      clearTimeout(timeoutId);
      // 通信をキャンセル
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <h2>GitHub リポジトリ検索</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="検索キーワードを入力..."
      />

      {isLoading && <p>検索中...</p>}
      {error && <p>エラー: {error}</p>}

      <div className="repo-list">
        {repositories.map((repo) => (
          <div key={repo.id} className="repo-card">
            <h3>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.full_name}
              </a>
            </h3>
            <p>{repo.description}</p>
            <div className="repo-stats">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              <span>📝 {repo.language}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knock44;
