import { memo } from "react";

type propType = {
  buttonName: string;
  action: () => void;
};

const CounterButton = memo(({ buttonName, action }: propType) => {
  return <button onClick={action}>{buttonName}</button>;
});

export default CounterButton;
