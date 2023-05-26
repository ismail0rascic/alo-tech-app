import SearchIcon from "@mui/icons-material/Search";

import { getSongs } from "../../actions/songsActions";

export class SearchData {
  constructor(classes, inputRef, dispatch, setLoading) {
    this.buttonData = {
      content: (
        <SearchIcon className={classes["searchButtonIcon"]} fontSize="large" />
      ),
      actionHandler: () => {
        setLoading(true);
        getSongs(inputRef, dispatch, setLoading);
      },
      className: classes["searchButton"],
    };

    this.inputData = {
      placeholder: "Search",
      keyPressHandler: (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          this.buttonData.actionHandler();
        }
      },
      className: classes["searchInput"],
    };

    return {
      buttonData: this.buttonData,
      inputData: this.inputData,
    };
  }
}
