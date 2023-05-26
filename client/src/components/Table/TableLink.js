import { Link } from "@mui/material";

function TableLink({ url }) {
  return (
    <Link href={url} target="_blank" rel="noopener">
      Click here
    </Link>
  );
}

export default TableLink;
