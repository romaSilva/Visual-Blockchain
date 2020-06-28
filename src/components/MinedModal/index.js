import React, { useContext } from "react";
import Modal from "react-modal";
import GlobalContext from "../../store/Context";
import { StyledModalContainer } from "./style";

Modal.setAppElement("#root");

const MinedModal = () => {
  const {
    cryptoCurrency,
    minedModal,
    updateMinedModal,
    updateBlockchain,
    updateLatestBlock,
  } = useContext(GlobalContext);

  return cryptoCurrency ? (
    <Modal
      isOpen={minedModal}
      style={MinedModalStyle}
      onRequestClose={() => {
        updateMinedModal(false);
        updateBlockchain();
        updateLatestBlock();
      }}
    >
      <StyledModalContainer>
        <h2>Congratulations!</h2>
        <span>
          You just received {cryptoCurrency.miningReward}$ for mining a new
          block
        </span>
      </StyledModalContainer>
    </Modal>
  ) : null;
};

export default MinedModal;

const MinedModalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "#36393F",
    border: "none",
  },
};
