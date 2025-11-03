type toggleProps = {
  toggleHandler: () => void;
};

const Toggle = ({ toggleHandler }: toggleProps) => {
  return <button onClick={toggleHandler}>テーマ切り替え</button>;
};

export default Toggle;
