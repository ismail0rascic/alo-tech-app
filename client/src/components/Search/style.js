import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    margin: theme.spacing(5),
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  searchInput: {
    width: "80%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.lightBackground,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.lightTitle,
      },
      "& .MuiOutlinedInput-input": {
        color: theme.palette.lightBackground,
      },
      "&.Mui-focused .MuiOutlinedInput-input": {
        color: theme.palette.lightTitle,
      },
    },
  },
  searchButton: {
    border: `1px solid ${theme.palette.lightBackground}`,
    "&:hover": {
      border: "1px solid black",
    },
  },
  searchButtonIcon: {
    color: theme.palette.lightBackground,
  },

  searchError: {
    padding: theme.spacing(3),
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default useStyles;
