import UserCard from "./UserCard";
import StatItem from "./StatItem";

const Dashboard = () => {
  const user = {
    name: "Naoto",
    age: 100,
  };

  const stats = [
    { label: "歩数", value: 8421 },
    { label: "睡眠", value: "6.5h" },
    { label: "水分", value: "1200ml" },
  ];

  return (
    <div>
      <UserCard {...user} />
      <ul>
        {stats.map((item) => (
          <StatItem label={item.label} value={item.value} />
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
