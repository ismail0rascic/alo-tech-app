import { TableCell, Typography } from "@mui/material";
import TableAvatar from "./TableAvatar";
import TableLink from "./TableLink";

const MyTableCell = ({ row, column, styles }) => {
  const { tableCellFont = "" } = styles;
  const value = row ? row[column] : column;

  const header = () => {
    return (
      <Typography className={tableCellFont} variant={"h6"}>
        <b> {value}</b>
      </Typography>
    );
  };
  const body = () => {
    return (
      <>
        {column?.includes("image") ? (
          <TableAvatar url={value} />
        ) : column?.includes("url") ? (
          <TableLink url={value} />
        ) : (
          <Typography className={tableCellFont}>{value}</Typography>
        )}
      </>
    );
  };

  return <TableCell>{row ? body() : header()}</TableCell>;
};
export default MyTableCell;
