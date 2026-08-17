import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay = 500): T {
  // デバウンスされた値を返す
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  // useEffectでタイマー制御
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value as T);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function Knock50() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Searching for:", debouncedSearchTerm);
      // ここでAPI呼び出しなど
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <p>Input value: {searchTerm}</p>
      <p>Debounced value: {debouncedSearchTerm}</p>
    </div>
  );
}

export default Knock50;
