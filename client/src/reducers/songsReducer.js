export const reducer = (state, action) => {
  switch (action.type) {
    case "LIST_SONGS":
      return [...action.payload];
    case "ERROR":
      return action.payload;
    default:
      return state;
  }
};
