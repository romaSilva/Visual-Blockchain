import React, { useEffect, useContext } from "react";
import Blocks from "../../components/Blocks";
import TranscationsInBlock from "../../components/TransactionsInBlock";
import TransactionDetails from "../../components/TransactionDetails";
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
  }, [cryptoCurrency]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledBlockchainContainer>
      <Blocks />
      <TranscationsInBlock />
      <TransactionDetails />
    </StyledBlockchainContainer>
  );
};

export default Blockchain;
