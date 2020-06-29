import React, { useContext } from "react";
import { StyledButton } from "./style";
import GlobalContext from "../../store/Context";

const Button = ({
  title,
  mineNewBlock,
  updateWhatIsHappening,
  event,
  updateUsers,
  user,
  setInput,
}) => {
  const { whatIsHappening } = useContext(GlobalContext);

  return (
    <StyledButton
      whatIsHappening={whatIsHappening}
      onClick={() => {
        if (whatIsHappening !== "mining") {
          if (mineNewBlock && updateWhatIsHappening) {
            mineNewBlock();
            updateWhatIsHappening(event);
          }
          if (updateUsers) {
            updateUsers(user);
            setInput("");
          }
        }
      }}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
