import React, { useReducer } from "react";
import Reducer from "./Reducer";
import GlobalContext from "./Context";
import { Blockchain as BlockchainClass } from "../models/blockchain";

const Store = (props) => {
  const initialState = {
    tab: "",

    cryptoCurrency: undefined,
    blockchain: [],
    selectedBlock: 0,
    latestBlock: {},
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const updateTab = (tab) => {
    dispatch({
      type: "SET_TAB",
      payload: tab,
    });
  };

  const updateCryptoCurrency = () => {
    const myCurrency = new BlockchainClass();

    dispatch({
      type: "SET_CRYPTOCURRENCY",
      payload: myCurrency,
    });
  };

  const updateBlockchain = () => {
    if (state.cryptoCurrency) {
      const myBlockchain = state.cryptoCurrency.chain;

      dispatch({
        type: "SET_BLOCKCHAIN",
        payload: myBlockchain,
      });
    }
  };

  const updateLatestBlock = () => {
    if (state.cryptoCurrency) {
      const myLatestBlock = state.cryptoCurrency.getLatestBlock();

      dispatch({
        type: "SET_LATESTBLOCK",
        payload: myLatestBlock,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        tab: state.tab,
        updateTab,

        cryptoCurrency: state.cryptoCurrency,
        blockchain: state.blockchain,
        selectedBlock: state.selectedBlock,
        latestBlock: state.latestBlock,
        updateBlockchain,
        updateLatestBlock,
        updateCryptoCurrency,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
