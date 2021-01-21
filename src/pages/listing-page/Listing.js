import React, { useEffect, useState } from "react";

import { getLines } from "../../helper/dataHelper";
import fetchDataStructure from "../../api/api";
import  Lines  from './shared/Lines'
import  Element  from './shared/Element'
import  Options  from './shared/Options'

import "./Listing.css";

function Listing() {
  const [structuredData, setStructuredData] = useState("");

  useEffect(() => {
    fetchDataStructure().then(data => setStructuredData(data));
  }, []);

  const sections = structuredData
    ? structuredData
        .filter(item => item.type === "section")
        .map(section => ({
          ...section,
          lines: getLines(section.id, structuredData)
        }))
    : [];
    
  const renderLines = lines => {
    return lines.map((line, index) => {
      return (
        <div key={index} className="Line">
          {line.elements.map(element => renderElement(element))}
        </div>
      );
    });
  };

  const renderElement = element => {
    return (
      <div className="Element">
        <div>{element.properties.name}</div>
        {renderOptions(element.options)}
      </div>
    );
  };

  const renderOptions = options => {
    if (!options) return null;

    return (
      <div className="Options">
        {options.map((option, index) => {
          return <div key={index} className="Option">{option.name}</div>;
        })}
      </div>
    );
  };

  return (
    <div>
      {sections.map((section, index) => {
        return (
          <div key={index} className="Section">
            <div>{section.properties.name}</div>
            {/* {renderOptions(section.options)}
            {renderLines(section.lines)}
             */}
              <Options options={section.options}/>
              <Lines lines={section.lines}/>
          </div>
        );
      })}
    </div>
  );
}

export default Listing;
