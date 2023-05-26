export const attachTableStyles = (classes) => {
  return {
    table: classes["table"],
    tableHeaderStyles: {
      tableHeader: classes["tableHeader"],
      tableCellFont: classes["tableHeaderFont"],
    },
    tableBodyStyles: {
      tableBody: classes["tableBody"],
      tableRow: classes["tableRow"],
      tableCellFont: classes["tableBodyFont"],
    },
  };
};
