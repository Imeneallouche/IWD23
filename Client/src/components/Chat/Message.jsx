const Message = ({ side, message }) => {
  const leftStyle = {
    backgroundColor: "white",
    color: "#A9A7A7",
    justifyContent: "flex-start",
    marginTop: '5px'
  };

  const rightStyle = {
    backgroundColor: "#7A86FFB2",
    color: "white",
    justifyContent: "flex-end",
    marginTop: "5px"
  };

  const { backgroundColor, color, justifyContent, marginTop } =
    side === "left" ? leftStyle : rightStyle;
  return (
    <div style={{ display: "flex", justifyContent }}>
      <div
        className="max-w-[70%] md:max-w-[50%] rounded-md"
        style={{
          backgroundColor,
          color,
          marginTop
        }}
      >
        <h3 className="text-sm leading-[20px] p-3 font-bold">{message}</h3>
      </div>
    </div>
  );
};

export default Message;
