import { useState } from "react";

type FormDataType = {
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
};

type ErrorsType = {
  email?: string;
  password?: string;
  agreeToTerms?: string;
};

const EMAIL_CHECK_REG =
  "^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$" as const;

const PASSWORD_CHECK_REG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

const Knock23 = () => {
  // Form送信データ
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  // エラー内容保持用
  const [errors, setErrors] = useState<ErrorsType>({});

  // パスワード強度表示用
  const [passwordStrength, setPasswordStrength] = useState(0);

  // メールアドレスのバリデーションチェック
  const validateEmail = (email: string) => {
    setFormData((prev) => ({
      ...prev,
      email: email,
    }));

    // メールアドレスの検証
    if (email.trim() === "" || !new RegExp(EMAIL_CHECK_REG).test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "メールアドレスの形式に誤りがあります。",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }
  };

  const checkPasswordStrength = (password: string) => {
    setFormData((prev) => ({
      ...prev,
      password,
    }));

    let score = 0;

    // 1. 8文字以上であること
    if (password.trim().length >= 8) {
      score += 1;
    }

    // 2. 大文字・小文字、数字を含むこと
    if (
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    ) {
      score += 1;
    }

    // 3. 強度チェック用の正規表現
    if (PASSWORD_CHECK_REG.test(password)) {
      score += 1;
    }

    // 4. 特殊文字の使用も推奨
    if (/[^A-Za-z0-9]/.test(password)) {
      score += 1;
    }

    // 5. 12文字以上であること
    if (password.trim().length >= 12) {
      score += 1;
    }

    setPasswordStrength(Math.min(score, 5));
  };

  const validateForm = () => {
    const nextErrors: ErrorsType = {
      email: "",
      password: "",
      agreeToTerms: "",
    };

    if (
      formData.email.trim() === "" ||
      !new RegExp(EMAIL_CHECK_REG).test(formData.email)
    ) {
      nextErrors.email = "メールアドレスの形式に誤りがあります。";
    }

    if (!PASSWORD_CHECK_REG.test(formData.password)) {
      nextErrors.password =
        "パスワードは8文字以上で大文字・小文字・数字を含む必要があります。";
    } else {
      nextErrors.password = "";
    }

    if (!formData.agreeToTerms) {
      nextErrors.agreeToTerms = "規約に同意してください。";
    } else {
      nextErrors.agreeToTerms = "";
    }

    setErrors(nextErrors);
    return (
      !nextErrors.email && !nextErrors.password && !nextErrors.agreeToTerms
    );
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("送信されました。");
      console.log(JSON.stringify(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>メールアドレス:</label>
        <input
          type="email"
          value={formData.email}
          // onChange処理
          onChange={(e) => validateEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <label>パスワード:</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => checkPasswordStrength(e.target.value)}
        />
        <div className="password-strength">
          強度: {"★".repeat(passwordStrength)}
          {"☆".repeat(5 - passwordStrength)}
        </div>
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <div>
        <label>
          利用規約に同意
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                agreeToTerms: e.target.checked,
              }))
            }
          />
        </label>
        {errors.agreeToTerms && (
          <span className="error">{errors.agreeToTerms}</span>
        )}
      </div>

      <button type="submit">登録</button>
    </form>
  );
};

export default Knock23;
