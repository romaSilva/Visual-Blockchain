import styled from "styled-components";

export const StyledGridHeaderContainer = styled.div`
  height: 22px;

  background-color: #2f3136;
  color: white;

  display: flex;
  align-items: center;

  span {
    margin: 0 20px;
    font-size: 12px;
    width: 100%;
    text-align: left;
  }

  div {
    padding-top: 4px;
    margin-right: 7px;
    position: relative;

    &:hover::before {
      content: attr(data-tooltip);
      position: absolute;
      right: 100%;
      width: content;
      background-color: black;
      border-radius: 5px;
    }
  }
`;
