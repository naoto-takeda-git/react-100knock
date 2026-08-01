import { useRef, useState } from "react";

type FieldName = "field1" | "field2" | "field3";
type Values = Record<FieldName, string>;
type Errors = Record<FieldName, string>;

const FIELD_ORDER: FieldName[] = ["field1", "field2", "field3"];
const NEXT_FIELD_MAP: Record<FieldName, FieldName | null> = {
  field1: "field2",
  field2: "field3",
  field3: null,
};

const initialValues: Values = {
  field1: "",
  field2: "",
  field3: "",
};

const initialErrors: Errors = {
  field1: "",
  field2: "",
  field3: "",
};

const Knock20 = () => {
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>(initialErrors);
  const inputRefs = useRef<Record<FieldName, HTMLInputElement | null>>({
    field1: null,
    field2: null,
    field3: null,
  });

  // フォーカスイベント
  const handleFocus = (fieldName: FieldName) => {
    setFocusedField(fieldName);
  };

  // ブラーイベント
  const handleBlur = (fieldName: FieldName) => {
    const nextField = NEXT_FIELD_MAP[fieldName];
    const currentValue = values[fieldName];
    const message =
      currentValue.trim().length >= 3 ? "" : "3文字以上入力してください";

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: message,
    }));

    if (!message && nextField) {
      inputRefs.current[nextField]?.focus();
    }

    setFocusedField(null);
  };

  // 入力イベント
  const handleChange = (fieldName: FieldName, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));

    if (value.trim().length >= 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
    }
  };

  // 入力値チェック
  const isFormValid = (): boolean => {
    return FIELD_ORDER.every(
      (fieldName) => values[fieldName].trim().length >= 3,
    );
  };

  return (
    <div>
      {FIELD_ORDER.map((fieldName) => (
        <div key={fieldName}>
          <input
            ref={(element) => {
              inputRefs.current[fieldName] = element;
            }}
            type="text"
            placeholder="3文字入力"
            value={values[fieldName]}
            style={{
              borderColor:
                focusedField === fieldName
                  ? "blue"
                  : errors[fieldName]
                    ? "red"
                    : "#ccc",
              borderWidth: "2px",
            }}
            onFocus={() => handleFocus(fieldName)}
            onBlur={() => handleBlur(fieldName)}
            onChange={(e) => handleChange(fieldName, e.target.value)}
          />
          {errors[fieldName] && (
            <span style={{ color: "red" }}>{errors[fieldName]}</span>
          )}
        </div>
      ))}

      <button
        disabled={!isFormValid()}
        style={{
          padding: "10px 20px",
          backgroundColor: isFormValid() ? "#4CAF50" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: isFormValid() ? "pointer" : "not-allowed",
        }}
      >
        送信
      </button>
    </div>
  );
};

export default Knock20;
