import React, { useEffect, useContext } from "react";
import Blocks from "../Blocks";
import TranscationsInBlock from "../TransactionsInBlock";
import TransactionDetails from "../TransactionDetails";
import { StyledBlockchainContainer } from "./style";
import GlobalContext from "../../store/Context";

const Blockchain = () => {
  const { updateTab, cryptoCurrency, updateBlockchain } = useContext(
    GlobalContext
  );

  useEffect(() => {
    console.log("Blockchain tab mounted");
    updateTab("blockchain");
    updateBlockchain();
  }, [cryptoCurrency]);

  return (
    <StyledBlockchainContainer>
      <Blocks />
      <TranscationsInBlock />
      <TransactionDetails />
    </StyledBlockchainContainer>
  );
};

export default Blockchain;
