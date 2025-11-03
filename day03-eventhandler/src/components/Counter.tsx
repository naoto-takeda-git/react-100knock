type counterProps = {
  onClick: () => void;
};

const Counter = ({ onClick }: counterProps) => {
  return <button onClick={onClick}>プラス1</button>;
};

export default Counter;
