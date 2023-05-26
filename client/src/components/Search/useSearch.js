import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../pages/Home";

import useStyles from "./style";
import { SearchData } from "./data";

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const { state, dispatch} = useContext(AppContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const { buttonData, inputData } = new SearchData(
    useStyles(),
    inputRef,
    dispatch,
    setLoading
  );

  return { state, inputRef, inputData, buttonData, loading };
};
export default useSearch;
