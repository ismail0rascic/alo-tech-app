import { TextField } from "@material-ui/core";

const FormInput = ({ data, inputRef }) => {
  const { placeholder = "", className = "", keyPressHandler = () => {} } = data;

  return (
    <TextField
      color="primary"
      variant="outlined"
      onKeyDown={keyPressHandler}
      inputRef={inputRef}
      placeholder={placeholder}
      className={className}
    ></TextField>
  );
};

export default FormInput;
