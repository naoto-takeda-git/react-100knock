import Greeting from "./Greeting"

const Knock06: React.FC = () => {
    const names: string[] = ['takeda', 'tanaka', 'tanoshi'];
    return (
        <div>
            {names.map((name, index) => (
                <Greeting key = {index} name = {name} />
            ))}
        </div>
    )
};

export default Knock06;
