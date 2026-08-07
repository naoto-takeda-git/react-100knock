import { useRef, useState } from "react";

type LevelType = "beginner" | "intermediate" | "advanced";

type SkillType = {
  id: number;
  name: string;
  level: LevelType;
};

const SKILL_REGIST_MAX = 5 as const;
const SKILL_REGIST_MIN = 1 as const;

const Knock24 = () => {
  const [skills, setSkills] = useState<SkillType[]>([
    { id: 1, name: "", level: "beginner" },
  ]);
  const nextIdRef = useRef(2);

  const addSkill = () => {
    // スキルフィールドを追加
    const newSkill: SkillType = {
      id: nextIdRef.current,
      name: "",
      level: "beginner",
    };
    nextIdRef.current += 1;
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };

  const removeSkill = (id: number) => {
    // スキルフィールドを削除
    setSkills((prev) =>
      prev.filter((skill) => {
        return skill.id != id;
      }),
    );
  };

  const updateSkill = (id: number, field: keyof SkillType, value: string) => {
    // スキル情報を更新
    setSkills((prev) =>
      prev.map((s) =>
        s.id === id
          ? { ...s, [field]: field === "level" ? (value as LevelType) : value }
          : s,
      ),
    );
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 送信処理
    setSkills((prev) => prev.filter((skill) => skill.name.trim()));

    if (skills.length === 0) {
      alert("一つ以上のスキルを登録してください。");
    } else {
      console.log(skills);
      alert("form送信に成功しました。");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>スキル一覧</h3>

      {skills.map((skill) => (
        <div
          key={skill.id}
          className="skill-row"
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <input
            type="text"
            placeholder="スキル名"
            value={skill.name}
            onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
          />

          <select
            value={skill.level}
            onChange={(e) => updateSkill(skill.id, "level", e.target.value)}
            style={{ padding: "8px" }}
          >
            <option value="beginner">初級</option>
            <option value="intermediate">中級</option>
            <option value="advanced">上級</option>
          </select>

          <button
            type="button"
            onClick={() => removeSkill(skill.id)}
            disabled={skills.length <= SKILL_REGIST_MIN}
            style={{
              padding: "8px 12px",
              backgroundColor: skills.length <= 1 ? "#ccc" : "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              // cursor: "white",
              cursor: skills.length <= 1 ? "not-allowed" : "pointer",
            }}
          >
            削除
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addSkill}
        disabled={skills.length > SKILL_REGIST_MAX}
        style={{
          padding: "8px 16px",
          backgroundColor: skills.length >= 5 ? "#ccc" : "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: skills.length >= 5 ? "not-allowed" : "pointer",
          marginRight: "10px",
        }}
      >
        スキルを追加（{skills.length} / {SKILL_REGIST_MAX}）
      </button>

      <button
        type="submit"
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        送信
      </button>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        <h4>送信データ:</h4>
        <pre>
          {JSON.stringify(
            skills.filter((skill) => skill.name.trim()),
            null,
            2,
          )}
        </pre>
      </div>
    </form>
  );
};

export default Knock24;
