import React, { useReducer } from "react";
import Reducer from "./Reducer";
import GlobalContext from "./Context";
import { Blockchain as BlockchainClass } from "../models/blockchain";

const Store = (props) => {
  const initialState = {
    blockchain: [],
    selectedBlock: 0,
    latestBlock: {},
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const updateBlockchain = () => {
    if (!state.blockchain.length) {
      const myCurrency = new BlockchainClass();
      const myBlockchain = myCurrency.chain;

      dispatch({
        type: "SET_BLOCKCHAIN",
        payload: myBlockchain,
      });
    }
  };

  const updateLatestBlock = () => {
    if (state.blockchain.length) {
      const lateBlock = state.blockchain[state.blockchain.length - 1];
      dispatch({
        type: "SET_LATESTBLOCK",
        payload: lateBlock,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        blockchain: state.blockchain,
        selectedBlock: state.selectedBlock,
        latestBlock: state.latestBlock,
        updateBlockchain,
        updateLatestBlock,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
