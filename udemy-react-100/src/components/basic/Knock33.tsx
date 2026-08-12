import "./styles/Knock33.css";
import { useState } from "react";

type ProductsType = {
  id: number;
  name: string;
  category: CategoryType;
  price: number;
  inStock: boolean;
};

type CategoryType = "all" | "電子機器" | "家具" | "文具";

const Knock33 = () => {
  const [products] = useState<ProductsType[]>([
    {
      id: 1,
      name: "ノートPC",
      category: "電子機器",
      price: 80000,
      inStock: true,
    },
    { id: 2, name: "マウス", category: "電子機器", price: 3000, inStock: true },
    { id: 3, name: "机", category: "家具", price: 25000, inStock: false },
    { id: 4, name: "椅子", category: "家具", price: 15000, inStock: true },
    { id: 5, name: "ペン", category: "文具", price: 100, inStock: true },
    { id: 6, name: "ノート", category: "文具", price: 200, inStock: false },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [maxPrice, setMaxPrice] = useState(100000);

  const filteredProducts = products.filter((product) => {
    // カテゴリーと価格でフィルタリング
    return (
      (selectedCategory === "all" || product.category === selectedCategory) &&
      product.price <= maxPrice
    );
  });

  return (
    <div>
      <h2>商品フィルター</h2>

      <div className="filters">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as CategoryType)}
        >
          <option value="all">全カテゴリー</option>
          <option value="電子機器">電子機器</option>
          <option value="家具">家具</option>
          <option value="文具">文具</option>
        </select>

        <label>
          最大価格: ¥{maxPrice.toLocaleString()}
          <input
            type="range"
            min="0"
            max="100000"
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
      </div>

      <p>検索結果: {filteredProducts.length}件</p>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`product-item ${product.inStock ? "" : "out-of-stock"}`}
          >
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>¥{product.price.toLocaleString()}</p>
            <p className="stock-status">
              {product.inStock ? (
                <span className="in-stock">在庫あり</span>
              ) : (
                <span className="out-of-stock-text">在庫なし</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knock33;
