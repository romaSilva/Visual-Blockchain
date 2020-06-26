import React from "react";
import GridHeader from "../GridHeader";
import { StyledTransactionsInBlockContainer } from "./style";

const TransactionsInBlock = () => {
  return (
    <StyledTransactionsInBlockContainer>
      <GridHeader title="Transactions in the block" />
    </StyledTransactionsInBlockContainer>
  );
};

export default TransactionsInBlock;
