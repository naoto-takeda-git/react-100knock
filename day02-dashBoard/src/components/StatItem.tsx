type statItemProps = {
  label: string;
  value: string | number;
};

const StatItem = ({ label, value }: statItemProps) => {
  return (
    <li>
      {label} : {value}
    </li>
  );
};

export default StatItem;
