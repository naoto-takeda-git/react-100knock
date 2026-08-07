type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <div>こんにちは{name}さん</div>;
};

export default Greeting;
