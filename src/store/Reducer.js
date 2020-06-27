export default (state, action) => {
  switch (action.type) {
    case "SET_CRYPTOCURRENCY":
      return {
        ...state,
        cryptoCurrency: action.payload,
      };
    case "SET_BLOCKCHAIN":
      return {
        ...state,
        blockchain: action.payload,
      };
    case "SET_LATESTBLOCK":
      return {
        ...state,
        latestBlock: action.payload,
      };

    default:
      return state;
  }
};
