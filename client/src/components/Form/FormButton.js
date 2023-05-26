import { IconButton } from "@material-ui/core";

const FormButton = ({ data }) => {
  const { actionHandler = () => {}, content = "", className = "" } = data;
  return (
    <IconButton
      color="primary"
      
      onClick={actionHandler}
      className={className}
    >
      {content}
    </IconButton>
  );
};
export default FormButton;
