import "./section.css";

const Section = ({ children, header }) => {
  return (
    <div className="Content-container">
      <div className="Sub-container">
        <div className="Sub-heading">{header}</div>
        {children}
      </div>
    </div>
  );
};

export default Section;
