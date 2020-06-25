import styled from "styled-components";

export const StyledSideMenuContainer = styled.div`
  width: 250px;
  max-height: 100vh;
  height: 100%;

  background-color: #2f3136;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    height: 40px;
    width: 226px;
    margin: 10px 10px;
    border-radius: 6px;

    cursor: pointer;
    background-color: #2f3136;
    color: #b2b2b2;
    font-size: 16px;

    display: flex;
    align-items: center;

    span {
      flex-grow: 1;
    }

    &:hover {
      background-color: #393d42;
      color: #ffffff;
    }
  }
`;
