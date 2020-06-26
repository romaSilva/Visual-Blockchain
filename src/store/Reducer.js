export default (state, action) => {
  switch (action.type) {
    case "SET_BLOCKCHAIN":
      return {
        ...state,
        blockchain: action.payload,
      };

    default:
      return state;
  }
};
