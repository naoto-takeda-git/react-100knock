import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import "./styles/Knock51.css";

type InputValues = Record<string, string | number | boolean>;

type ErrorValues = Record<string, string>;
type ValidateFunction<T extends InputValues> = (values: T) => ErrorValues;

function useForm<T extends InputValues>(
  initialValues: T,
  validate: ValidateFunction<T>,
) {
  // values, errors, handleChange, handleSubmit, resetを実装
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<ErrorValues>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    setErrors(validate(nextValues));
  };

  const handleSubmit = (onSubmit: (values: T) => void) => {
    return (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (validate) {
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
          return;
        }
      }

      // エラーがなければ送信処理を実施
      onSubmit(values);
    };
  };

  const reset = (): void => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, handleChange, handleSubmit, reset };
}

type UserForm = InputValues & {
  email: string;
  password: string;
};
function Knock51() {
  const validate: ValidateFunction<UserForm> = (values: UserForm) => {
    const errors: ErrorValues = {};
    if (!values.email) errors.email = "メールアドレスは必須です";

    if (!values.password) errors.password = "パスワードは必須です";

    if (values.password && values.password.length < 6) {
      errors.password = "パスワードは6文字以上で入力してください";
    }
    return errors;
  };

  const { values, errors, handleChange, handleSubmit, reset } = useForm(
    { email: "", password: "" },
    validate,
  );

  const onSubmit = () => {
    console.log("Form submitted:", values);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />

      {errors.email && <span className="form-error">{errors.email}</span>}

      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />

      {errors.password && <span className="form-error">{errors.password}</span>}

      <button type="submit">Submit</button>

      <button type="button" onClick={reset}>
        Reset
      </button>
    </form>
  );
}

export default Knock51;
