import axios from "axios";

import {structureURL, suggestionsURL} from '../constants/config';

export const fetchDataStructure = async () => {
  return fetch(structureURL)
    .then(response => response.json())
    .then(data => {
      return Promise.all(
        data.data.structure.map(async item => {
          let optionData = "";
          if (item.type === "section" || item.type === "folder") {
            optionData = await fetchOptions(item.original.want);
            return {
              ...item,
              options: optionData
            };
          }
          return {
            ...item
          };
        })
      ).then(dataWithOptions => {
        return dataWithOptions;
      });
    });
};

const fetchOptions = async want => {
  return axios
    .post(suggestionsURL, {
      want: want,
      active: []
    })
    .then(function(resp) {
      return resp.data.data.response;
    })
};

export default fetchDataStructure;
