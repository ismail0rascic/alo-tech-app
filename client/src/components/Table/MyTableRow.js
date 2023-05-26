import { TableRow } from "@mui/material";
import MyTableCell from "./MyTableCell";

const MyTableRow = ({ columns, row, styles }) => {
  const { tableRow = "" } = styles;
  return (
    <TableRow className={tableRow}>
      {columns?.map((column, index) => (
        <MyTableCell key={index} row={row} column={column} styles={styles} />
      ))}
    </TableRow>
  );
};
export default MyTableRow;
