import React, { useReducer } from "react";
import GlobalContext from "./Context";
import Reducer from "./Reducer";
import { ec as EC } from "elliptic";
import { Blockchain as BlockchainClass } from "../models/blockchain";

const ANIMATION_SPEED_MS = 1;

const Store = (props) => {
  const initialState = {
    whatIsHappening: "",
    tab: "",
    minedModal: false,

    users: [],
    selectedUser: {},

    cryptoCurrency: undefined,
    blockchain: [],
    selectedBlock: 0,
    latestBlock: {},
    newBlock: [],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const updateWhatIsHappening = (whatIsHappening) => {
    dispatch({
      type: "SET_WHAT",
      payload: whatIsHappening,
    });
  };

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

  const updateDifficulty = (e) => {
    if (state.cryptoCurrency) {
      console.log(parseInt(e.target.value));
      state.cryptoCurrency.setDifficulty(parseInt(e.target.value));
    }
  };

  const updateUsers = (user) => {
    if (user) {
      const ec = new EC("secp256k1");
      const key = ec.genKeyPair();
      const publicKey = key.getPublic("hex");
      const privateKey = key.getPrivate("hex");

      const myNewUser = {
        nickname: user,
        key,
        publicKey,
        privateKey,
      };

      const myNewUsers = state.users;
      myNewUsers.push(myNewUser);

      dispatch({
        type: "SET_USERS",
        payload: myNewUsers,
      });
    }
  };

  const updateSelectedUser = (pk) => {
    const mySelectedUser = state.users.find((user) => user.publicKey === pk);
    dispatch({
      type: "SET_SELECTEDUSER",
      payload: mySelectedUser,
    });
  };

  const mineNewBlock = async () => {
    const newBlock = await state.cryptoCurrency.minePendingTransactions();

    const myNonce = document.getElementById("nonce");
    const myHash = document.getElementById("hash");

    for (let i = 0; i < newBlock.nonces.length; i++) {
      if (i % 20 === 0 || i === newBlock.nonces.length - 1) {
        setTimeout(() => {
          myNonce.innerHTML = newBlock.nonces[i];
          myHash.innerHTML = newBlock.hashs[i];
        }, i * ANIMATION_SPEED_MS);
      }
    }
    const RESTORE_TIME = ANIMATION_SPEED_MS * newBlock.nonces.length + 500;

    setTimeout(() => {
      updateMinedModal(true);
      updateWhatIsHappening("");
      myNonce.innerHTML = "Try a new Nonce";
      myHash.innerHTML = "Generate a new Hash";
    }, RESTORE_TIME);
  };

  return (
    <GlobalContext.Provider
      value={{
        whatIsHappening: state.whatIsHappening,
        tab: state.tab,
        minedModal: state.minedModal,
        updateTab,

        users: state.users,

        cryptoCurrency: state.cryptoCurrency,
        blockchain: state.blockchain,
        selectedBlock: state.selectedBlock,
        latestBlock: state.latestBlock,
        newBlock: state.newBlock,
        selectedUser: state.selectedUser,
        updateWhatIsHappening,
        updateMinedModal,
        updateBlockchain,
        updateLatestBlock,
        updateCryptoCurrency,
        updateSelectedBlock,
        updateDifficulty,
        updateUsers,
        updateSelectedUser,
        mineNewBlock,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default Store;
