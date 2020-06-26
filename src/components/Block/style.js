import styled from "styled-components";

export const StyledBlockContainer = styled.div`
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  article {
    height: 75%;
    width: 75%;
    margin: 0 20px;

    border: 0.8px solid #ffffff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    span {
      color: #ffffff;
      font-weight: 300;
    }
  }
`;
