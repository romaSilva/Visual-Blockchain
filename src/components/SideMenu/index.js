import React, { useContext, useEffect } from "react";
import { StyledSideMenuContainer } from "./style";
import { Link } from "react-router-dom";
import {
  GiCrossedChains,
  GiTakeMyMoney,
  GiDiamondHard,
  GiWallet,
} from "react-icons/gi";
import GlobalContext from "../../store/Context";

const SideMenu = () => {
  const { tab, updateTab, updateCryptoCurrency } = useContext(GlobalContext);

  useEffect(() => {
    console.log("SideMenu mounted");
    updateCryptoCurrency();
  }, []);

  return (
    <StyledSideMenuContainer>
      <h1>Visual Blockchain</h1>

      <Link style={{ textDecoration: "none" }} to={"/blockchain"}>
        <button
          style={{
            backgroundColor: tab === "blockchain" ? "#393d42" : null,
          }}
          onClick={() => updateTab("blockchain")}
        >
          <GiCrossedChains
            style={{
              ...iconsStyle,
              color: tab === "blockchain" ? "#ffb522" : null,
            }}
          />
          <span
            style={{
              color: tab === "blockchain" ? "#ffffff" : null,
            }}
          >
            Blockchain
          </span>
        </button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"/users"}>
        <button
          style={{
            backgroundColor: tab === "users" ? "#393d42" : null,
          }}
          onClick={() => updateTab("users")}
        >
          <GiWallet
            style={{
              ...iconsStyle,
              color: tab === "users" ? "#ffb522" : null,
            }}
          />
          <span style={{ color: tab === "users" ? "#ffffff" : null }}>
            Users
          </span>
        </button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"/transactions"}>
        <button
          style={{
            backgroundColor: tab === "transactions" ? "#393d42" : null,
          }}
          onClick={() => updateTab("transactions")}
        >
          <GiTakeMyMoney
            style={{
              ...iconsStyle,
              color: tab === "transactions" ? "#ffb522" : null,
            }}
          />
          <span
            style={{
              color: tab === "transactions" ? "#ffffff" : null,
            }}
          >
            Transactions
          </span>
        </button>
      </Link>

      <Link style={{ textDecoration: "none" }} to={"/mining"}>
        <button
          style={{
            backgroundColor: tab === "mining" ? "#393d42" : null,
          }}
          onClick={() => updateTab("mining")}
        >
          <GiDiamondHard
            style={{
              ...iconsStyle,
              color: tab === "mining" ? "#ffb522" : null,
            }}
          />
          <span style={{ color: tab === "mining" ? "#ffffff" : null }}>
            Mining
          </span>
        </button>
      </Link>
    </StyledSideMenuContainer>
  );
};

export default SideMenu;

const iconsStyle = {
  marginLeft: "8px",
  fontSize: "22px",
};
