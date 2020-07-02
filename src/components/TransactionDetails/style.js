import styled from "styled-components";

export const StyledTransactionDetailsContainer = styled.div`
  grid-area: TD;

  overflow: hidden;
  border-radius: 5px;
  background-color: #40444b;
`;

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.8px solid #fff;
    border-radius: 5px;
    min-width: 80%;
    margin-top: 20px;
    color: #fff;
    font-weight: 300;
    min-height: 100px;

    .hashz {
      margin-top: 5px;
      word-wrap: break-word;
      width: 300px;
      text-align: center;
    }
  }
`;
