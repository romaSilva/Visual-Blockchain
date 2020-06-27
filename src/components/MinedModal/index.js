import React, { useContext } from "react";
import Modal from "react-modal";
import GlobalContext from "../../store/Context";

Modal.setAppElement("#root");

const MinedModal = () => {
  const {
    minedModal,
    updateMinedModal,
    updateBlockchain,
    updateLatestBlock,
  } = useContext(GlobalContext);

  return (
    <Modal
      isOpen={minedModal}
      onRequestClose={() => {
        updateMinedModal(false);
        updateBlockchain();
        updateLatestBlock();
      }}
    >
      <span>COngratz</span>
    </Modal>
  );
};

export default MinedModal;
