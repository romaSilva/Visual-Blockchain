import React, { useReducer } from "react";
import Reducer from "./Reducer";
import GlobalContext from "./Context";
import { Blockchain as BlockchainClass } from "../models/blockchain";

const Store = (props) => {
  const initialState = {
    blockchain: [],
    selectedBlock: 0,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const updateBlockchain = () => {
    const myCurrency = new BlockchainClass();
    const myBlockchain = myCurrency.chain;

    dispatch({
      type: "SET_BLOCKCHAIN",
      payload: myBlockchain,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        blockchain: state.blockchain,
        selectedBlock: state.selectedBlock,
        updateBlockchain,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
