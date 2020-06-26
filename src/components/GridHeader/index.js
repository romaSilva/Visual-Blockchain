import React from "react";
import { StyledGridHeaderContainer } from "./style";

const GridHeader = ({ title }) => {
  return (
    <StyledGridHeaderContainer>
      <span>{title}</span>
    </StyledGridHeaderContainer>
  );
};

export default GridHeader;
