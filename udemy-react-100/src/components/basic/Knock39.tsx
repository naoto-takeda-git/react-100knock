import { useEffect, useState } from "react";

type Settings = {
  theme: string;
  fontSize: string;
  language: string;
  notifications: boolean;
};

const KEY_SETTINGS = "settings";

const defaultSettings: Settings = {
  theme: "light",
  fontSize: "medium",
  language: "ja",
  notifications: true,
};

const loadSettings = (): Settings => {
  try {
    const savedSettings = localStorage.getItem(KEY_SETTINGS);
    if (!savedSettings) return defaultSettings;

    return {
      ...defaultSettings,
      ...JSON.parse(savedSettings),
    };
  } catch {
    return defaultSettings;
  }
};

const Knock39 = () => {
  const [settings, setSettings] = useState<Settings>(() => loadSettings());

  // 設定変更時に自動保存
  useEffect(() => {
    localStorage.setItem(KEY_SETTINGS, JSON.stringify(settings));
  }, [settings]);

  const updateSetting = (key: keyof Settings, value: string | boolean) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem(KEY_SETTINGS);
  };

  return (
    <div>
      <h2>ユーザー設定</h2>

      <div>
        <label>
          テーマ:
          <select
            value={settings.theme}
            onChange={(e) => updateSetting("theme", e.target.value)}
          >
            <option value="light">ライト</option>
            <option value="dark">ダーク</option>
            <option value="auto">自動</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          フォントサイズ:
          <select
            value={settings.fontSize}
            onChange={(e) => updateSetting("fontSize", e.target.value)}
          >
            <option value="small">小</option>
            <option value="medium">中</option>
            <option value="large">大</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          言語:
          <select
            value={settings.language}
            onChange={(e) => updateSetting("language", e.target.value)}
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => updateSetting("notifications", e.target.checked)}
          />
          通知を有効にする
        </label>
      </div>

      <button onClick={resetSettings}>設定をリセット</button>

      <div>
        <h3>現在の設定:</h3>
        <pre>{JSON.stringify(settings, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Knock39;
