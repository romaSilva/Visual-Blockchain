import React, { useContext } from "react";
import { StyledBlockContainer } from "./style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import GlobalContext from "../../store/Context";
import { ellipseString } from "../../utils/ellipseString";

const Block = () => {
  const {
    blockchain,
    selectedBlock,
    updateSelectedBlock,
    updateSelectedTx,
  } = useContext(GlobalContext);

  return (
    blockchain.length && (
      <StyledBlockContainer>
        <IoIosArrowBack
          onClick={() => {
            updateSelectedBlock(selectedBlock - 1);
            updateSelectedTx(0);
          }}
          style={{
            ...iconsStyle,
            visibility: selectedBlock === 0 ? "hidden" : "visible",
          }}
        />
        <article>
          <span>{`Timestamp: ${blockchain[selectedBlock].timestamp}`}</span>
          <span>{`Hash: ${ellipseString(
            blockchain[selectedBlock].hash,
            30
          )}`}</span>
          <span>{`Previous Hash: ${ellipseString(
            blockchain[selectedBlock].previousHash,
            24
          )}`}</span>
        </article>
        <IoIosArrowForward
          onClick={() => {
            updateSelectedBlock(selectedBlock + 1);
            updateSelectedTx(0);
          }}
          style={{
            ...iconsStyle,
            visibility:
              selectedBlock === blockchain.length - 1 ? "hidden" : "visible",
          }}
        />
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
