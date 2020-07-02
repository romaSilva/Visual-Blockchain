import styled from "styled-components";

export const StyledTransactionsInBlockContainer = styled.div`
  grid-area: TB;

  overflow: hidden;
  border-radius: 5px;
  background-color: #40444b;
`;

export const StyledTxs = styled.div`
  margin: 10px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
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

    span {
    }
  }
`;
