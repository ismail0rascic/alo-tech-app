import { Container } from "@mui/material";
import Table from "../Table/Table";
import useSongs from "./useSongs";

const Songs = () => {
  const { columns, data, tableStyles } = useSongs();

  return (
    <Container >
      <Table data={data} columns={columns} styles={tableStyles} />
    </Container>
  );
};

export default Songs;
