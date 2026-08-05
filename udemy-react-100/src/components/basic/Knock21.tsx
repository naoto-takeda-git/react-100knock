import { useState } from "react";

type Field = "name" | "email" | "phone";

// form用タイプ
type FormObject = {
  name: string;
  email: string;
  phone: string;
};

// エラー用タイプ
type Errors = {
  name: string;
  email: string;
  phone: string;
};

// メールアドレスの形式チェック用
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Knock21 = () => {
  const [formData, setFormData] = useState<FormObject>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    phone: "",
  });

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 3) return digits;
    if (/^0(?:80|90)/.test(digits)) {
      if (digits.length <= 3) return digits;
      if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
      return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
    }

    // 080/090 以外は 3-4-4 の通常パターンで整える
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  };

  const handleChange = (field: Field, value: string) => {
    const nextValue = field === "phone" ? formatPhoneNumber(value) : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: nextValue,
    }));

    let errorMsg = "";

    if (field === "name") {
      if (value.length < 2) {
        errorMsg = "名前は2文字以上で入力してください";
      }
    } else if (field === "email") {
      if (value.trim() === "" || !emailPattern.test(value)) {
        errorMsg = "有効なメールアドレスを入力してください";
      }
    } else if (field === "phone") {
      const digits = nextValue.replace(/\D/g, "");

      if (digits.length === 0) {
        errorMsg = "";
      } else if (!/^0(?:80|90)\d{8}$/.test(digits)) {
        errorMsg = "電話番号は080/090で始まる11桁で入力してください";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMsg,
    }));
  };

  return (
    <form>
      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          名前:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </label>
        {errors.name && (
          <span style={{ color: "red", display: "block", fontSize: "12px" }}>
            {errors.name}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          メールアドレス:
          <input
            type="text"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </label>
        {errors.email && (
          <span style={{ color: "red", display: "block", fontSize: "12px" }}>
            {errors.email}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>
          電話番号:
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </label>
        {errors.phone && (
          <span style={{ color: "red", display: "block", fontSize: "12px" }}>
            {errors.phone}
          </span>
        )}
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        <h4>入力内容:</h4>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </form>
  );
};

export default Knock21;
