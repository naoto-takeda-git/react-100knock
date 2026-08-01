type UserCardProps = {
    name: string,
    age: number,
    isActive: boolean
};

const UserCard: React.FC<UserCardProps> = ({
    name,
    age,
    isActive
}) => {
    return (
        <div className="user-card">
            名前：{name}<br />
            年齢：{age}<br />
            ステータス：{isActive ? 'アクティブ' : '非アクティブ'}
        </div>
    )
};

export default UserCard;