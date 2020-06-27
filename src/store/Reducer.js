export default (state, action) => {
  switch (action.type) {
    case "SET_TAB":
      return {
        ...state,
        tab: action.payload,
      };
    case "SET_SELECTEDBLOCK":
      return {
        ...state,
        selectedBlock: action.payload,
      };
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
    case "SET_NEWBLOCK":
      return {
        ...state,
        newBlock: action.payload,
      };
    case "SET_MINEDMODAL":
      return {
        ...state,
        minedModal: action.payload,
      };

    default:
      return state;
  }
};
