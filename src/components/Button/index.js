import React from "react";
import { StyledButton } from "./style";

const Button = ({ title, click }) => {
  return <StyledButton onClick={() => click()}>{title}</StyledButton>;
};

export default Button;
