import React, { useEffect, useState } from "react";

import { getSections } from "../../helper/dataHelper";
import fetchDataStructure from "../../api/api";
import Lines from "./shared/Lines";
import Options from "./shared/Options";

import "./Listing.css";

function Listing() {
  const [structuredData, setStructuredData] = useState("");

  useEffect(() => {
    fetchDataStructure().then(data => setStructuredData(data));
  }, []);

  const sections = getSections(structuredData);

  return (
    <div>
      {sections.map((section, index) => {
        return (
          <div key={index} className="Section">
            <div>{section.properties.name}</div>
            <Options options={section.options} />
            <Lines lines={section.lines} />
          </div>
        );
      })}
    </div>
  );
}

export default Listing;
