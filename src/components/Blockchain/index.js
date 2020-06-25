import React from "react";
import Blocks from "../Blocks";
import TranscationsInBlock from "../TransactionsInBlock";
import TransactionDetails from "../TransactionDetails";
import { StyledBlockchainContainer } from "./style";

const Blockchain = () => {
  return (
    <StyledBlockchainContainer>
      <Blocks />
      <TranscationsInBlock />
      <TransactionDetails />
    </StyledBlockchainContainer>
  );
};

export default Blockchain;
