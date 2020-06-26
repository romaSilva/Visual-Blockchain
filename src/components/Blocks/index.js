import React, { useContext } from "react";
import GridHeader from "../GridHeader";
import GlobalContext from "../../store/Context";
import Block from "../Block";
import { StyledBlocksContainer } from "./style";

const Blocks = () => {
  const { blockchain, selectedBlock } = useContext(GlobalContext);
  return (
    <StyledBlocksContainer>
      <GridHeader title={`Block ${selectedBlock + 1}/${blockchain.length}`} />
      <Block />
    </StyledBlocksContainer>
  );
};

export default Blocks;
