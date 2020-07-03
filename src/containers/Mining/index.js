import React, { useEffect, useContext } from "react";
import GridHeader from "../../components/GridHeader";
import Button from "../../components/Button";
import {
  StyledMiningContainer,
  StyledMiningItemsContainer,
  StyledButtonContainer,
} from "./style";
import GlobalContext from "../../store/Context";

const Mining = () => {
  const {
    whatIsHappening,
    updateWhatIsHappening,
    updateTab,
    cryptoCurrency,
    blockchain,
    latestBlock,
    updateLatestBlock,
    mineNewBlock,
    updateDifficulty,
    selectedUser,
  } = useContext(GlobalContext);

  useEffect(() => {
    updateTab("mining");
    updateLatestBlock();
  }, [cryptoCurrency]); //eslint-disable-line react-hooks/exhaustive-deps

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
          <GridHeader
            title={
              selectedUser.nickname
                ? `${selectedUser.nickname}'s Public Key`
                : "Public Key"
            }
          />
          <StyledMiningItemsContainer>
            <span>{selectedUser.publicKey && selectedUser.publicKey}</span>
          </StyledMiningItemsContainer>
        </section>

        <section>
          <GridHeader title="Nonce" />
          <StyledMiningItemsContainer>
            <span id="nonce">Try a new Nonce</span>
          </StyledMiningItemsContainer>
        </section>

        <section>
          <GridHeader title="Hash" />
          <StyledMiningItemsContainer>
            <span id="hash">Generate a new Hash</span>
          </StyledMiningItemsContainer>
        </section>
      </StyledMiningContainer>
      <StyledButtonContainer>
        <select
          name="difficulty"
          id="difficulty"
          onChange={whatIsHappening !== "mining" ? updateDifficulty : null}
        >
          <option value="2">Easy</option>
          <option value="3">Medium</option>
          <option value="4">Hard</option>
        </select>
        <Button
          title="Mine!"
          mineNewBlock={mineNewBlock}
          updateWhatIsHappening={updateWhatIsHappening}
          event="mining"
        />
      </StyledButtonContainer>
    </>
  ) : null;
};

export default Mining;
