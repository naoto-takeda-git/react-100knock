import { useState } from "react";
import "./styles/Knock34.css";

type ProductType = {
  id: string;
  name: string;
  price: number;
};

type CategoryType = {
  id: string;
  name: string;
  items: ProductType[];
};

type ExpandedCategoriesTyep = {
  [key: string]: boolean;
};

const Knock34 = () => {
  const [categories] = useState<CategoryType[]>([
    {
      id: "cat1",
      name: "電子機器",
      items: [
        { id: "item1", name: "スマートフォン", price: 50000 },
        { id: "item2", name: "タブレット", price: 40000 },
        { id: "item3", name: "イヤホン", price: 5000 },
      ],
    },
    {
      id: "cat2",
      name: "書籍",
      items: [
        { id: "item4", name: "プログラミング入門", price: 2500 },
        { id: "item5", name: "デザインの基礎", price: 3000 },
      ],
    },
    {
      id: "cat3",
      name: "衣類",
      items: [
        { id: "item6", name: "Tシャツ", price: 2000 },
        { id: "item7", name: "ジーンズ", price: 6000 },
        { id: "item8", name: "スニーカー", price: 8000 },
      ],
    },
  ]);

  const [expandedCategories, setExpandedCategories] =
    useState<ExpandedCategoriesTyep>({});

  const toggleCategory = (categoryId: string) => {
    // カテゴリーの展開/折りたたみを切り替え
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <div>
      <h2>カテゴリー別商品リスト</h2>

      <div className="category-list">
        {categories.map((category) => (
          <div className="category-products-container" key={category.id}>
            <div
              className="category-header"
              onClick={() => toggleCategory(category.id)}
            >
              <span className="category-toggle-icon">
                {expandedCategories[category.id] ? "➖" : "➕"}
              </span>
              <span className="category-products-title">{category.name}</span>
              <span className="category-count">
                ({category.items.length}件)
              </span>
            </div>
            {expandedCategories[category.id] &&
              category.items.map((pruduct) => (
                <div className="product-item" key={pruduct.id}>
                  <p className="product-name">{pruduct.name}</p>
                  <p className="product-price">
                    ¥{pruduct.price.toLocaleString()}
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knock34;
