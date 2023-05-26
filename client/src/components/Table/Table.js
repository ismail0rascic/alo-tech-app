import {
  Table,
  TableContainer,
  Paper,
} from "@material-ui/core";
import MyTableHeader from "./MyTableHeader";
import MyTableBody from "./MyTableBody";

const MyTable = ({ data, columns, styles }) => {
  const { table, tableHeaderStyles, tableBodyStyles } = styles;

  return (
    <TableContainer component={Paper}>
      <Table className={table} aria-label="simple table">
        <MyTableHeader
          data={data}
          columns={columns}
          styles={tableHeaderStyles}
        />
        <MyTableBody data={data} columns={columns} styles={tableBodyStyles} />
      </Table>
    </TableContainer>
  );
};
export default MyTable;
