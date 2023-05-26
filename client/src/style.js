export const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    backgroundColor: "#474866",
    borderRadius: "6px",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};
export const dimensions = { width: "100vw", height: "100vh" };
