import React, { useContext } from "react";
import { StyledBlockContainer } from "./style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GlobalContext from "../../store/Context";

const Block = () => {
  const { blockchain, selectedBlock } = useContext(GlobalContext);

  return (
    blockchain.length && (
      <StyledBlockContainer>
        <IoIosArrowBack style={iconsStyle} />
        <article>
          <span>{`Timestamp: ${blockchain[selectedBlock].timestamp}`}</span>
          <span>{`Hash: ${blockchain[selectedBlock].hash}`}</span>
          <span>{`Previous Hash: ${blockchain[selectedBlock].previousHash}`}</span>
        </article>
        <IoIosArrowForward style={iconsStyle} />
      </StyledBlockContainer>
    )
  );
};

export default Block;

const iconsStyle = {
  cursor: "pointer",
  color: "#ffb522",
  fontSize: 40,
};
