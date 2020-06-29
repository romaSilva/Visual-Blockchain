import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100px;
  margin: 5px 15px;
  box-sizing: content-box;
  padding: 5px;
  height: 20px;

  cursor: ${({ whatIsHappening }) =>
    whatIsHappening === "mining" ? "not-allowed" : "pointer"};
  background-color: #36393f;
  border: 0.8px solid #ffb522;
  border-radius: 5px;
  color: #b2b2b2;

  &:hover {
    background-color: #393d42;
    color: #ffffff;
  }
`;
