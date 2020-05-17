export const actionCreator = (setValue) => {
  const action = {
    type: "SEND",
    payload: { val: setValue },
  };
  return action;
};
