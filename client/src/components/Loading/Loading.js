import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useStyles from "./style";

const Loading = () => {
  const { loading } = useStyles();
  return (
    <Box className={loading}>
      <CircularProgress />
    </Box>
  );
};
export default Loading;
