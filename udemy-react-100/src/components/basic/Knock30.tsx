import { useState } from "react";

type ViewModeType = "list" | "grid" | "card";

type ItemObjectType = {
  id: number;
  title: string;
  description: string;
};

type CardViewProps = {
  items: ItemObjectType[];
};

const CardView = ({ items }: CardViewProps) => {
  return (
    <div className="card-view">
      {items.map((item) => (
        <div key={item.id} className="card">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

type ListViewProps = {
  items: ItemObjectType[];
};

const ListView = ({ items }: ListViewProps) => {
  return (
    <ul className="list-view">
      {items.map((item) => (
        <li key={item.id}>
          <strong>{item.title}:</strong> {item.description}
        </li>
      ))}
    </ul>
  );
};

type GridViewProps = {
  items: ItemObjectType[];
};

const GridView = ({ items }: GridViewProps) => {
  return (
    <div className="grid-view">
      {items.map((item) => (
        <div key={item.id} className="grid-item">
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

const Knock30 = () => {
  const [viewMode, setViewMode] = useState<ViewModeType>("card"); // card, list, grid

  const items: ItemObjectType[] = [
    { id: 1, title: "アイテム1", description: "説明1" },
    { id: 2, title: "アイテム2", description: "説明2" },
    { id: 3, title: "アイテム3", description: "説明3" },
  ];

  const renderContent = () => {
    // 各モードの表示を条件分岐
    switch (viewMode) {
      case "card":
        return <CardView items={items} />;
      case "list":
        return <ListView items={items} />;
      case "grid":
        return <GridView items={items} />;
    }
  };

  return (
    <div>
      <h2>表示モード切り替え</h2>

      <div className="mode-selector">
        <button
          className={viewMode === "card" ? "active" : ""}
          onClick={() => setViewMode("card")}
        >
          カード
        </button>
        <button
          className={viewMode === "list" ? "active" : ""}
          onClick={() => setViewMode("list")}
        >
          リスト
        </button>
        <button
          className={viewMode === "grid" ? "active" : ""}
          onClick={() => setViewMode("grid")}
        >
          グリッド
        </button>
      </div>

      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default Knock30;
