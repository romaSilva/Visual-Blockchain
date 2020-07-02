import React, { useContext } from "react";
import GlobalContext from "../../store/Context";
import GridHeader from "../GridHeader";
import { StyledTransactionsInBlockContainer, StyledTxs } from "./style";

const TransactionsInBlock = () => {
  const { selectedBlock, blockchain, users } = useContext(GlobalContext);

  return blockchain.length > 0 ? (
    <StyledTransactionsInBlockContainer>
      <GridHeader title="Transactions in the block" />
      <StyledTxs>
        {selectedBlock > 0 &&
          blockchain[selectedBlock].transactions.map((tx) => (
            <div key={tx.timestamp}>
              <span>{`From: ${
                tx.fromAddress === "System-Provider"
                  ? "System-Provider"
                  : users.find((user) => user.publicKey === tx.fromAddress)
                      .nickname
              }`}</span>
              <span>{`To: ${
                users.find((user) => user.publicKey === tx.toAddress).nickname
              }`}</span>
              <span>{`Amount: ${tx.amount}`}</span>
            </div>
          ))}
      </StyledTxs>
    </StyledTransactionsInBlockContainer>
  ) : null;
};

export default TransactionsInBlock;
