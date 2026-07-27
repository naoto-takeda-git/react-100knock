type CardProps = {
    title: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({title, children}: CardProps) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <div>{children}</div>
        </div>
    )
}

export default Card;