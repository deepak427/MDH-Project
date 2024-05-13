const Avatar = ({
  backgroundImage,
  padding,
  borderRadius,
}) => {
  const style = {
    backgroundImage,
    padding,
    borderRadius,
    backgroundSize: "100%",
    marginRight: "0.2rem",
  };

  return <div style={style}></div>;
};

export default Avatar;
