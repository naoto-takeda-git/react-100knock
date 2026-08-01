type GreetingProps = {
  name: stirng;
};

const Greeting = ({ name }: GreetingProps) => {
  return <div>こんにちは{name}さん</div>;
};

export default Greeting;
