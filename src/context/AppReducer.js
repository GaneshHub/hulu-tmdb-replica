export const initialState = {
  selectedOption: "Trending"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_OPTION":
      return {
        ...state,
        selectedOption: action.payload.selectedOption
      };
    default:
      return state;
  }
};
