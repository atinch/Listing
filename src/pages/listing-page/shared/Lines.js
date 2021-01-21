import Element from "./Element";

const Lines = props => {
  return props.lines.map((line, index) => {
    return (
      <div key={index} className="Line">
        {line.elements.map(element => (
          <Element key={index} element={element} />
        ))}
      </div>
    );
  });
};

export default Lines;
