type GreetingProps = {
    name: stirng
};

const Greeting: React.FC  = ({name}: GreetingProps) => {
    return (
        <div>
            こんにちは{name}さん
        </div>
    )
};

export default Greeting;