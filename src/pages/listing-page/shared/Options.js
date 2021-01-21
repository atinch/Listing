const Options = (props) => {
  if (!props.options) return null;

  return (
    <div className="Options">
      {props.options.map((option, index) => {
        return <div key={index} className="Option">{option.name}</div>;
      })}
    </div>
  );
};

export default Options;