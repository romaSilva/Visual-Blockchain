import styled from "styled-components";

// BC => Blocks
// TB => Transactions in blocks
// TD => Transactions details

export const StyledMiningContainer = styled.div`
  height: 70%;
  margin: 20px;

  display: grid;
  grid-template-columns: 48.5% 48.5%;
  grid-template-rows: 48% 48%;
  gap: 4% 3%;

  section {
    overflow: hidden;
    border-radius: 5px;
    background-color: #40444b;
  }
`;

export const StyledMiningItemsContainer = styled.div`
  margin: 0 20%;
  width: 60%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 100%;
    height: auto;
    word-wrap: break-word;
    font-weight: 300;
    color: #ffffff;
    font-size: 16px;
    padding: 20px;

    border: 0.8px solid white;
    border-radius: 5px;
    box-sizing: content-box;
  }
`;

export const StyledButtonContainer = styled.div`
  padding: 0 60px 0 0;
  margin: 25px 3% 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  select {
    margin: 0 10px;
    width: 100px;
    background-color: #36393f;
    outline: none;
    border: 0.8px solid #ffb522;
    box-sizing: content-box;
    padding: 5px;
    border-radius: 5px;
    color: #b2b2b2;
    font-family: "Roboto", serif;
    height: 20px;
    --webkit-appearance: none;
  }
`;
