const HeadingTitle = ({ title }) => {
  return (
    <div style={divStyles}>
      <h2 style={h2Styles}>{title}</h2>
    </div>
  );
};

const divStyles = {
  padding: "10px 30px",
  backgroundColor: "var(--primary-color)",
};

const h2Styles = {
  color: "gray",
  fontSize: "30px",
  fontWeight: "500",
  borderLeft: "7px solid #6E4463",
  width: "max-content",
  padding: "5px",
};

export default HeadingTitle;
