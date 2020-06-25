import React, { useState } from "react";
import { StyledSideMenuContainer } from "./style";
import {
  GiCrossedChains,
  GiMoneyStack,
  GiDiamondHard,
  GiWallet,
  GiCrownCoin,
} from "react-icons/gi";

const SideMenu = () => {
  const [selectedButton, setSelectedButton] = useState("blockchain");

  return (
    <StyledSideMenuContainer>
      <GiCrownCoin
        style={{ margin: "40px 0 50px 0", color: "#ffb522", fontSize: "80px" }}
      />

      <button
        style={{
          backgroundColor: selectedButton === "blockchain" ? "#393d42" : null,
        }}
        onClick={() => setSelectedButton("blockchain")}
      >
        <GiCrossedChains
          style={{
            ...iconsStyle,
            color: selectedButton === "blockchain" ? "#ffb522" : null,
          }}
        />
        <span
          style={{ color: selectedButton === "blockchain" ? "#ffffff" : null }}
        >
          Blockchain
        </span>
      </button>

      <button
        style={{
          backgroundColor: selectedButton === "users" ? "#393d42" : null,
        }}
        onClick={() => setSelectedButton("users")}
      >
        <GiWallet
          style={{
            ...iconsStyle,
            color: selectedButton === "users" ? "#ffb522" : null,
          }}
        />
        <span style={{ color: selectedButton === "users" ? "#ffffff" : null }}>
          Users
        </span>
      </button>

      <button
        style={{
          backgroundColor: selectedButton === "transactions" ? "#393d42" : null,
        }}
        onClick={() => setSelectedButton("transactions")}
      >
        <GiMoneyStack
          style={{
            ...iconsStyle,
            color: selectedButton === "transactions" ? "#ffb522" : null,
          }}
        />
        <span
          style={{
            color: selectedButton === "transactions" ? "#ffffff" : null,
          }}
        >
          Transactions
        </span>
      </button>

      <button
        style={{
          backgroundColor: selectedButton === "mining" ? "#393d42" : null,
        }}
        onClick={() => setSelectedButton("mining")}
      >
        <GiDiamondHard
          style={{
            ...iconsStyle,
            color: selectedButton === "mining" ? "#ffb522" : null,
          }}
        />
        <span style={{ color: selectedButton === "mining" ? "#ffffff" : null }}>
          Mining
        </span>
      </button>
    </StyledSideMenuContainer>
  );
};

export default SideMenu;

const iconsStyle = {
  marginLeft: "8px",
  fontSize: "22px",
};
