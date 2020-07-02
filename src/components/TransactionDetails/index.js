import React, { useContext } from "react";
import GlobalContext from "../../store/Context";
import GridHeader from "../GridHeader";
import { StyledTransactionDetailsContainer, StyledDetails } from "./style";
import { ellipseString } from "../../utils/ellipseString";

const TransactionDetails = () => {
  const { selectedTx } = useContext(GlobalContext);

  return (
    <StyledTransactionDetailsContainer>
      <GridHeader title="Transaction Details" />
      {selectedTx.fromAddress && (
        <StyledDetails>
          <div>
            <span>From:</span>
            <span className="hashz">
              {ellipseString(selectedTx.fromAddress, 100)}
            </span>
          </div>
          <div>
            <span>To:</span>
            <span className="hashz">
              {ellipseString(selectedTx.toAddress, 100)}
            </span>
          </div>
        </StyledDetails>
      )}
    </StyledTransactionDetailsContainer>
  );
};

export default TransactionDetails;
