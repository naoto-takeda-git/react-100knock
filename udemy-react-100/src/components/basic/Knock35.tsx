import { useState } from "react";

type EmployeeType = {
  id: number;
  name: string;
  age: number;
  department: string;
  salary: number;
};

type SortDirection = "asc" | "desc";

const Knock35 = () => {
  const [employees] = useState<EmployeeType[]>([
    { id: 1, name: "山田太郎", age: 28, department: "営業部", salary: 400000 },
    { id: 2, name: "佐藤花子", age: 35, department: "人事部", salary: 450000 },
    { id: 3, name: "鈴木一郎", age: 42, department: "開発部", salary: 600000 },
    { id: 4, name: "田中美咲", age: 26, department: "営業部", salary: 350000 },
    { id: 5, name: "高橋健", age: 31, department: "開発部", salary: 550000 },
    {
      id: 6,
      name: "伊藤さくら",
      age: 29,
      department: "人事部",
      salary: 380000,
    },
  ]);

  const [sortKey, setSortKey] = useState<keyof EmployeeType | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc"); // asc or desc
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (key: keyof EmployeeType) => {
    const prevSortKey = sortKey;

    // ソートキーと方向を設定
    setSortKey(key);

    if (prevSortKey !== key) {
      setSortDirection("asc");
    } else {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    }
  };

  const sortedAndFilteredEmployees = employees
    .filter((emp) => {
      // 検索フィルター
      return (
        emp.name.includes(searchTerm) || emp.department.includes(searchTerm)
      );
    })
    .sort((a, b) => {
      if (!sortKey) return 0;

      const direction = sortDirection === "asc" ? 1 : -1;

      switch (sortKey) {
        case "name":
          return a.name.localeCompare(b.name) * direction;
        case "age":
          return (a.age - b.age) * direction;
        case "salary":
          return (a.salary - b.salary) * direction;
        default:
          return 0;
      }
    });

  return (
    <div className="employee-sort">
      <h2>従業員リスト</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="名前または部署で検索..."
          className="search-input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          className="reset-button"
          onClick={() => {
            setSortKey(null);
            setSearchTerm("");
            setSortDirection("asc");
          }}
        >
          元の順序に戻す
        </button>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th className="sortable" onClick={() => handleSort("name")}>
              名前 {sortKey === "name" && (sortDirection === "asc" ? "▲" : "▼")}
            </th>
            <th className="sortable" onClick={() => handleSort("age")}>
              年齢 {sortKey === "age" && (sortDirection === "asc" ? "▲" : "▼")}
            </th>
            <th>部署</th>
            <th className="sortable" onClick={() => handleSort("salary")}>
              給与{" "}
              {sortKey === "salary" && (sortDirection === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="info">
        <p>表示件数: {sortedAndFilteredEmployees.length}件</p>
      </div>
    </div>
  );
};

export default Knock35;
