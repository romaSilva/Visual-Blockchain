import React, { useReducer } from "react";
import Reducer from "./Reducer";
import GlobalContext from "./Context";
import { Blockchain as BlockchainClass } from "../models/blockchain";

const Store = (props) => {
  const initialState = {
    tab: "",
    minedModal: false,

    cryptoCurrency: undefined,
    blockchain: [],
    selectedBlock: 0,
    latestBlock: {},
    newBlock: [],
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

  const updateSelectedBlock = (mySelectedBlock) => {
    dispatch({
      type: "SET_SELECTEDBLOCK",
      payload: mySelectedBlock,
    });
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

  const updateMinedModal = (bool) => {
    dispatch({
      type: "SET_MINEDMODAL",
      payload: bool,
    });
  };

  const mineNewBlock = async () => {
    const newBlock = await state.cryptoCurrency.minePendingTransactions();

    const myNonce = document.getElementById("nonce");
    const myHash = document.getElementById("hash");

    for (let i = 0; i < newBlock.nonces.length; i++) {
      if (i % 10 === 0 || i === newBlock.nonces.length - 1) {
        setTimeout(() => {
          myNonce.innerHTML = newBlock.nonces[i];
          myHash.innerHTML = newBlock.hashs[i];
        }, i * 2);
      }
    }
    const RESTORE_TIME = 2 * newBlock.nonces.length + 1000;

    setTimeout(() => {
      updateMinedModal(true);
      myNonce.innerHTML = "0";
      myHash.innerHTML = "0";
    }, RESTORE_TIME);
  };

  return (
    <GlobalContext.Provider
      value={{
        tab: state.tab,
        minedModal: state.minedModal,
        updateTab,

        cryptoCurrency: state.cryptoCurrency,
        blockchain: state.blockchain,
        selectedBlock: state.selectedBlock,
        latestBlock: state.latestBlock,
        newBlock: state.newBlock,
        updateMinedModal,
        updateBlockchain,
        updateLatestBlock,
        updateCryptoCurrency,
        updateSelectedBlock,
        mineNewBlock,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
