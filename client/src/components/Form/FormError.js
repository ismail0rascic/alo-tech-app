import { Typography } from "@mui/material";
import useStyles from "../Search/style";

const FormError = ({ data }) => {
  const { searchError } = useStyles();

  return (
    <Typography className={searchError}  variant="h6" color={"error"}>
      {data}
    </Typography>
  );
};
export default FormError;
