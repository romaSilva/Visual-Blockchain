import React, { useEffect, useContext } from "react";
import GridHeader from "../GridHeader";
import { StyledMiningContainer, StyledMiningItemsContainer } from "./style";
import GlobalContext from "../../store/Context";

const Mining = () => {
  const { latestBlock, updateLatestBlock } = useContext(GlobalContext);

  useEffect(() => {
    updateLatestBlock();
  }, []);

  return (
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
  );
};

export default Mining;
