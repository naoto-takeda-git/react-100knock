const Knock03 = () => {
  const age: number = 27;
  const name: string = "tanaka";
  const currentYear = new Date().getFullYear();

  return (
    <div>
      わたしの名前は{name}です。{age}歳です。今年は{currentYear}
      年です。
    </div>
  );
};

export default Knock03;
