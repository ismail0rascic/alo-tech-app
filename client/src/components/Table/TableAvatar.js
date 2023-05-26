import { Avatar } from "@mui/material";

const TableAvatar = ({ url }) => {
  return (
    <Avatar
      sx={{ width: 120, height: 80, borderRadius: 0 }}
      src={url}
    />
  );
};
export default TableAvatar;
