import { useState } from "react";

type FormDataType = {
  name: string;
  email: string;
  address: string;
  phone: string;
};

type ErrorType = {
  [key in keyof FormDataType]?: string;
};

const ERROR_MSG = {
  NAME: "氏名を正しく入力してください。",
  EMAIL: "メールアドレスを正しく入力してください。",
  ADDRESS: "住所を正しく入力してください。",
  PHONE: "電話番号を正しく入力してください。",
};

const Knock25 = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({
    // Step 1
    name: "",
    email: "",
    // Step 2
    address: "",
    phone: "",
    // Step 3 は確認のみ
  });
  const [errors, setErrors] = useState<ErrorType>({});

  const handleInputChange = (field: keyof FormDataType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateStep1 = (): boolean => {
    let checkResult = false;

    // 名前のチェック
    if (!formData.name.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: ERROR_MSG.NAME,
      }));
      checkResult = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        name: "",
      }));
    }
    // メールアドレスのチェック
    if (!formData.email.trim()) {
      setErrors((prev) => ({
        ...prev,
        email: ERROR_MSG.EMAIL,
      }));
      checkResult = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "",
      }));
    }

    return checkResult;
  };

  const validateStep2 = (): boolean => {
    let checkResult = false;

    // 住所のチェック
    if (!formData.address.trim()) {
      setErrors((prev) => ({
        ...prev,
        address: ERROR_MSG.ADDRESS,
      }));
      checkResult = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        address: "",
      }));
    }
    // 電話番号のチェック
    if (!formData.phone.trim()) {
      setErrors((prev) => ({
        ...prev,
        phone: ERROR_MSG.PHONE,
      }));
      checkResult = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }

    return checkResult;
  };
  const validateStep3 = (): boolean => {
    return true;
  };

  const validateStep = (step: number): boolean => {
    // 各ステップのバリデーション
    if (step === 1) {
      return validateStep1();
    } else if (step === 2) {
      return validateStep2();
    } else {
      return validateStep3();
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      alert("入力値を見直してください。");
    } else {
      // 次のステップへ
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    // 前のステップへ
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    // 最終送信処理
    console.log(JSON.stringify(formData));
    alert("正常に送信されました。");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3>Step 1: 基本情報</h3>
            <div className="form-group">
              <div>
                <label>
                  氏名：
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </label>
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div>
                <label>
                  メールアドレス：
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </label>
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Step 2: 詳細情報</h3>
            <div className="form-group">
              <div>
                <label>
                  住所：
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                  />
                </label>
                {errors.address && (
                  <span className="error">{errors.address}</span>
                )}
              </div>
              <div>
                <label>
                  電話番号：
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </label>
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Step 3: 確認</h3>
            <h5>下記入力内容で正しいでしょうか？</h5>
            <div>
              <p>氏名：{formData.name}</p>
            </div>
            <div>
              <p>メールアドレス：{formData.email}</p>
            </div>
            <div>
              <p>住所：{formData.address}</p>
            </div>
            <div>
              <p>電話番号：{formData.phone}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="multi-step-form">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(currentStep / 3) * 100}%` }}
        />
      </div>

      <div className="step-indicator">
        {[1, 2, 3].map((step) => (
          <span key={step} className={step === currentStep ? "active" : ""}>
            Step {step}
          </span>
        ))}
      </div>

      {renderStep()}

      <div className="navigation">
        <button onClick={handlePrev} disabled={currentStep === 1}>
          前へ
        </button>

        {currentStep < 3 ? (
          <button onClick={handleNext}>次へ</button>
        ) : (
          <button onClick={handleSubmit}>送信</button>
        )}
      </div>
    </div>
  );
};

export default Knock25;
