import React, { useContext } from "react";
import { StyledButton } from "./style";
import GlobalContext from "../../store/Context";

const Button = ({ title, mineNewBlock, updateWhatIsHappening, event }) => {
  const { whatIsHappening } = useContext(GlobalContext);

  return (
    <StyledButton
      onClick={() => {
        if (whatIsHappening !== "mining") {
          mineNewBlock();
          updateWhatIsHappening(event);
        }
      }}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
