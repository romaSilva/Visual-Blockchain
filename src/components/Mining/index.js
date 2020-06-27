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
            <span>{getNonce()}</span>
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
      <StyledButtonContainer>
        <Button title="Mine!" click={mineNewBlock} />
        <Button title="Add Block" />
      </StyledButtonContainer>
    </>
  ) : null;
};

export default Mining;
