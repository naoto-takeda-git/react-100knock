import { useState } from "react";

type UseLocalStorageReturn<T> = [T, (value: T) => void, () => void];

const useLocalStorage = <T,>(
  key: string,
  initialValue: T,
): UseLocalStorageReturn<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setName = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeName = () => {
    try {
      setStoredValue("" as unknown as T);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setName, removeName];
};

const Knock47 = () => {
  const [name, setName, removeName] = useLocalStorage("userName", "default");

  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Stored name: {name}</p>
      <button onClick={removeName}>Clear Storage</button>
    </div>
  );
};

export default Knock47;
