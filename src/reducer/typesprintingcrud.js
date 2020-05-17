const initialState = [];

export const reducer = (state = initialState, action) => {
  let newState = {};
  if (action.type === "SEND") {
    newState = { ...state, foodtypecollection: action.payload.val };
  }
  return newState;
};
