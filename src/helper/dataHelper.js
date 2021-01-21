export const getLines = (sectionId, structuredData) => {
  return structuredData
    .filter(item => item.type === "line" && item.parentId === sectionId)
    .map(line => ({
      ...line,
      elements: structuredData.filter(item => item.parentId === line.id)
    }));
};

export const getSections = structuredData => {
  return structuredData
    ? structuredData
        .filter(item => item.type === "section")
        .map(section => ({
          ...section,
          lines: getLines(section.id, structuredData)
        }))
    : [];
};
