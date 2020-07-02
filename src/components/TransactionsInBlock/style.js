import styled from "styled-components";

export const StyledTransactionsInBlockContainer = styled.div`
  grid-area: TB;

  overflow: hidden;
  border-radius: 5px;
  background-color: #40444b;
`;

export const StyledTxs = styled.div`
  margin: 30px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
    margin-right: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3136;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #40444b;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 80%;

    color: #fff;
    padding: 10px;
    border-bottom: 0.8px solid #fff;
    font-weight: 300;

    &:last-child {
      border: none;
    }
    &:hover {
      background-color: #4c515b;
      cursor: pointer;
    }

    span {
    }
  }
`;
