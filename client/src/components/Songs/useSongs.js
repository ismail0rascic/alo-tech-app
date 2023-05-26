import { useContext } from "react";
import { AppContext } from "../../pages/Home";
import { attachTableStyles } from "./data";
import useStyles from "./style";

const useSongs = () => {
  const { state } = useContext(AppContext);
  const columns = Object.keys({ ...state[0] });
  const data = [...state];

  const tableStyles = attachTableStyles(useStyles());

  return { columns, data, tableStyles };
};
export default useSongs;
