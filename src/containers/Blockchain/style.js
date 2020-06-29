import styled from "styled-components";

// BC => Blocks
// TB => Transactions in blocks
// TD => Transactions details

export const StyledBlockchainContainer = styled.div`
  display: grid;
  grid-template-columns: 48.5% 48.5%;
  grid-template-rows: 48% 48%;
  grid-template-areas:
    "BL TB"
    "TD TB";
  height: 100%;
  gap: 4% 3%;

  margin: 20px;
`;
