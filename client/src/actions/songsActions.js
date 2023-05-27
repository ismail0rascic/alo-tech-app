import { get } from "./index";

export const getSongs = (inputRef, dispatch, setLoading) => {
  const successCallback = (data) => {
    setLoading(false);
    dispatch({ type: "LIST_SONGS", payload: data });
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const errorCallback = (err) => {
    setLoading(false);
    dispatch({ type: "ERROR", payload: err });
  };

  get("/api/tracks", inputRef.current.value.toLowerCase().trim(), successCallback, errorCallback);
};
