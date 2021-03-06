import styled from "styled-components";

export const StyledTransactionsContainer = styled.div`
  height: 90%;
  margin: 10px 0 0;

  section {
    background-color: #40444b;
    border-radius: 5px;
    overflow: hidden;
    margin: 20px;
  }

  .AT {
    height: 100px;
  }

  .PT {
    height: 400px;
  }
`;

export const StyledAddTx = styled.div`
  height: 75%;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin: 0 20px;
    font-size: 16px;
    color: #fff;
    font-weight: 300;
  }

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

  input {
    background-color: #40444b;
    border: 0.8px solid #fff;
    border-radius: 5px;
    width: 85px;
    margin: 0 15px 0;
    font-family: "Roboto", serif;
    padding: 5px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 300;
    height: 20px;
    box-sizing: content-box;

    &::placeholder {
      color: #b2b2b2;
    }

    &:focus {
      border: 0.8px solid #fff;
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const StyledPendingTx = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80%;
  margin-top: 20px;

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

  article {
    color: #fff;
    font-weight: 300;
    border-bottom: 0.8px solid white;
    width: 95%;
    padding: 5px;

    display: flex;
    justify-content: space-between;

    &:last-child {
      border: none;
    }

    span {
      margin: 10px 20px;
    }
  }
`;
