const Knock05 = () => {
  const imageUrl: string = "https://placehold.co/150";
  const alterTxt: string = "サンプル画像";
  const baseWidth: number = 150;
  const isLarge: boolean = true;

  return (
    <>
      <img
        src={imageUrl}
        alt={alterTxt}
        width={isLarge ? baseWidth * 2 : baseWidth}
        data-size={isLarge ? "large" : "small"}
      />
    </>
  );
};

export default Knock05;
