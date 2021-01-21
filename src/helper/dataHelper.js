export const getLines = (sectionId, structuredData) => {
  return structuredData
    .filter(item => item.type === "line" && item.parentId === sectionId)
    .map(line => ({
      ...line,
      elements: structuredData.filter(item => item.parentId === line.id)
    }));
};


