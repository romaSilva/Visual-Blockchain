import styled from "styled-components";

// AU - Add User
// US - Users
// UD - User details

export const StyledUsersContainer = styled.div`
  height: 90%;
  margin: 20px;

  display: grid;
  grid-template-columns: 48.5% 48.5%;
  grid-template-rows: 20% 75%;
  gap: 5% 3%;
  grid-template-areas:
    "AU UD"
    "US UD";

  section {
    grid-area: AU;
    background-color: #40444b;
    border-radius: 5px;
    overflow: hidden;
  }

  .AU {
    grid-area: AU;
  }
  .UD {
    grid-area: UD;
  }
  .US {
    grid-area: US;
  }
`;

export const StyledAddUser = styled.article`
  height: 70%;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background-color: #40444b;
    border: 0.8px solid #fff;
    border-radius: 5px;
    width: 300px;
    margin: 0 15px 0;
    font-family: "Roboto", serif;
    padding: 5px;
    font-size: 16px;
    color: #ffffff;
    font-weight: 300;
    height: 20px;
    box-sizing: content-box;

    &::placeholder {
      color: #b2b2b2;
    }

    &:focus {
      border: 0.8px solid #fff;
    }
  }
`;

export const StyledUsers = styled.article`
  height: 85%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  span {
    width: 50%;
    border-bottom: 0.8px solid #b2b2b2;
    text-align: center;
    padding: 10px;
    color: #fff;
    font-weight: 300;
    cursor: pointer;

    &:hover {
      background-color: #4c515b;
    }

    &:last-child {
      border: none;
    }
  }
`;

export const StyledDetails = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    margin: 15px;
    color: #fff;
    font-weight: 300;
    border: 0.8px solid #fff;
    width: 85%;
    height: 135px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    span {
      word-wrap: break-word;
      width: 80%;
      text-align: center;
    }
  }
`;
