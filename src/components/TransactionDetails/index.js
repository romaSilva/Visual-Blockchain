import React from "react";
import GridHeader from "../GridHeader";
import { StyledTransactionDetailsContainer } from "./style";

const TransactionDetails = () => {
  return (
    <StyledTransactionDetailsContainer>
      <GridHeader title="Transaction Details" />
    </StyledTransactionDetailsContainer>
  );
};

export default TransactionDetails;
