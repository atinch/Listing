import Element from './Element'

const Lines = (props) => {
  return props.lines.map((line, index) => {
    return (
      <div key={index} className="Line">
        {line.elements.map(element => <Element element={element}/>)}
      </div>
    );
  });
};

export default Lines;
