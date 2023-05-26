import Home from "./pages/Home";
import { Scrollbars } from "react-custom-scrollbars";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import { dimensions, renderThumb } from "./style";

const App = () => {
  return (
    <Scrollbars
      style={dimensions}
      renderThumbVertical={renderThumb}
    >
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Scrollbars>
  );
};

export default App;
