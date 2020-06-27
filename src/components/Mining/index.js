import React, { useEffect, useContext } from "react";
import GridHeader from "../GridHeader";
import { StyledMiningContainer, StyledMiningItemsContainer } from "./style";
import GlobalContext from "../../store/Context";

const Mining = () => {
  const {
    cryptoCurrency,
    blockchain,
    latestBlock,
    updateLatestBlock,
  } = useContext(GlobalContext);

  useEffect(() => {
    updateLatestBlock();
  }, [cryptoCurrency]);

  return blockchain && latestBlock ? (
    <StyledMiningContainer>
      <section>
        <GridHeader title="Latest Hash" />
        <StyledMiningItemsContainer>
          <span>{latestBlock.hash}</span>
        </StyledMiningItemsContainer>
      </section>

      <section>
        <GridHeader title="Miner's Wallet" />
        <StyledMiningItemsContainer>
          <span>
            sngjsfngjndfsoidfnbfisnbidfbjdfbnsdfkmbhsdjgnbgobmdsfibndfbuinefiub
          </span>
        </StyledMiningItemsContainer>
      </section>

      <section>
        <GridHeader title="Nonce" />
        <StyledMiningItemsContainer>
          <span>
            sngjsfngjndfsoidfnbfisnbidfbjdfbnsdfkmbhsdjgnbgobmdsfibndfbuinefiub
          </span>
        </StyledMiningItemsContainer>
      </section>

      <section>
        <GridHeader title="Hash" />
        <StyledMiningItemsContainer>
          <span>
            sngjsfngjndfsoidfnbfisnbidfbjdfbnsdfkmbhsdjgnbgobmdsfibndfbuinefiub
          </span>
        </StyledMiningItemsContainer>
      </section>
    </StyledMiningContainer>
  ) : null;
};

export default Mining;
