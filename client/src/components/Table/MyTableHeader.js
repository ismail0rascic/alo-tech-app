import { TableHead } from "@mui/material";
import MyTableRow from "./MyTableRow";

const MyTableHeader = ({ data, columns, styles }) => {
  const { tableHeader } = styles;
  return (
    <TableHead className={tableHeader}>
      <MyTableRow data={data} columns={columns} styles={styles} />
    </TableHead>
  );
};
export default MyTableHeader;
