import { Box, Container } from "@mui/material";
import { FormButton, FormInput } from "../Form";

import useStyles from "./style";
import useSearch from "./useSearch";
import FormError from "../Form/FormError";
import Loading from "../Loading/Loading";

const Search = () => {
  const { searchContainer, searchBox } = useStyles();
  const { state, inputRef, inputData, buttonData, loading } = useSearch();

  return (
    <Container className={searchContainer}>
      <Box className={searchBox}>
        <FormInput data={inputData} inputRef={inputRef} />
        <FormButton data={buttonData} />
      </Box>
      {!Array.isArray(state) && <FormError data={state} />}
      {loading && <Loading />}
    </Container>
  );
};
export default Search;
