import { TableBody } from "@mui/material";

import MyTableRow from "./MyTableRow";

const MyTableBody = ({ data, columns, styles }) => {
  const { tableBody } = styles;

  return (
    <TableBody className={tableBody}>
      {data?.map((row, index) => (
        <MyTableRow key={index} row={row} columns={columns} styles={styles} />
      ))}
    </TableBody>
  );
};
export default MyTableBody;
