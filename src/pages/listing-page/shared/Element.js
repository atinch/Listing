import Options from "./Options";

const Element = props => {
  return (
    <div className="Element">
      <div>{props.element.properties.name}</div>
      <Options options={props.element.options} />
    </div>
  );
};

export default Element;
