import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    background: theme.palette.lightBackground,

  },
  tableHeader: {
    background: theme.palette.lightBackground,
    

  },
  tableHeaderFont: {
    textTransform: "uppercase",
    color: theme.palette.lightTitle,
  },
  tableBody: {
    background: theme.palette.background,
  },
  tableBodyFont: {
    color: theme.palette.lightTitle,
  },
  tableRow: {

    borderTop: `3px solid ${theme.palette.lightTitle}`,
  },
}));
export default useStyles;
