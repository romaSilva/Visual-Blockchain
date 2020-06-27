import React, { useEffect, useContext } from "react";
import GridHeader from "../GridHeader";
import Button from "../Button";
import {
  StyledMiningContainer,
  StyledMiningItemsContainer,
  StyledButtonContainer,
} from "./style";
import GlobalContext from "../../store/Context";

const Mining = () => {
  const {
    updateTab,
    cryptoCurrency,
    blockchain,
    latestBlock,
    updateLatestBlock,
    mineNewBlock,
    getNonce,
  } = useContext(GlobalContext);

  useEffect(() => {
    updateTab("mining");
    updateLatestBlock();
  }, [cryptoCurrency]);

  return blockchain ? (
    <>
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
            <span id="nonce">0</span>
          </StyledMiningItemsContainer>
        </section>

        <section>
          <GridHeader title="Hash" />
          <StyledMiningItemsContainer>
            <span id="hash">0</span>
          </StyledMiningItemsContainer>
        </section>
      </StyledMiningContainer>
      <StyledButtonContainer>
        <Button title="Mine!" click={mineNewBlock} />
        <Button title="Cancel" />
      </StyledButtonContainer>
    </>
  ) : null;
};

export default Mining;
