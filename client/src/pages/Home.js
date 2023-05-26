import { createContext, useReducer } from "react";

import Search from "../components/Search/Search";
import Songs from "../components/Songs/Songs";

import { reducer } from "../reducers/songsReducer";

export const AppContext = createContext();

const Home = () => {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Search />
      {Array.isArray(state) && <Songs />}
    </AppContext.Provider>
  );
};
export default Home;
