type userCardProps = {
  name: string;
  age: number;
};

const UserCard = ({ name, age }: userCardProps) => {
  return (
    <div>
      ユーザー名：{name} ({age}歳)
    </div>
  );
};

export default UserCard;
