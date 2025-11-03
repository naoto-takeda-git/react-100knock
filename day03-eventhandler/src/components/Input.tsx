type inputProps = {
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onInput }: inputProps) => {
  return (
    <input
      type="text"
      id="text"
      onInput={onInput}
      placeholder="入力した値が上に反映されます"
      style={{ width: "250px" }}
    ></input>
  );
};

export default Input;
