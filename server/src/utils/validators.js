import validator from "validator";
import isEmpty from "is-empty";

export const validateGenreInput = (jsonData, genre) => {
  let error = false;
  genre = !isEmpty(genre) ? genre : "";

  if (!jsonData.hasOwnProperty(genre)) {
    error = "This genre is not available, please try another!";
  }
  if (validator.isEmpty(genre)) {
    error = "Please, input genre to start searching!";
  }

  return error;
};
