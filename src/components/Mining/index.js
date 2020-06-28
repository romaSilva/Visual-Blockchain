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
    updateDifficulty,
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
        <select name="difficulty" id="difficulty" onChange={updateDifficulty}>
          <option value="2">Easy</option>
          <option value="3">Medium</option>
          <option value="4">Hard</option>
        </select>
        <Button title="Mine!" click={mineNewBlock} />
      </StyledButtonContainer>
    </>
  ) : null;
};

export default Mining;
