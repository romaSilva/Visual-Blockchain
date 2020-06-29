import React, { useState, useContext } from "react";
import GlobalContext from "../../store/Context";
import Button from "../../components/Button";
import GridHeader from "../../components/GridHeader";
import {
  StyledUsersContainer,
  StyledAddUser,
  StyledUsers,
  StyledDetails,
} from "./style";

const Users = () => {
  const { users, selectedUser, updateUsers, updateSelectedUser } = useContext(
    GlobalContext
  );

  const [input, setInput] = useState("");

  return (
    <StyledUsersContainer>
      <section className="AU">
        <GridHeader title="Add User" />
        <StyledAddUser>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Type a nickname..."
          />
          <Button
            title="Add"
            updateUsers={updateUsers}
            user={input}
            setInput={setInput}
          />
        </StyledAddUser>
      </section>
      <section className="US">
        <GridHeader title="Users" />
        <StyledUsers>
          {users.map((user) => (
            <span
              key={user.publicKey}
              style={{
                color: selectedUser.publicKey === user.publicKey && "#ffb522",
              }}
              onClick={() => updateSelectedUser(user.publicKey)}
            >
              {user.nickname}
            </span>
          ))}
        </StyledUsers>
      </section>
      <section className="UD">
        <GridHeader title="User Details" />
        <StyledDetails>
          <section>
            <span>{selectedUser.nickname ? "Public Key" : ""}</span>
            <span>{selectedUser.publicKey}</span>
          </section>
          <section>
            <span>{selectedUser.nickname ? "Private Key" : ""}</span>
            <span>{selectedUser.privateKey}</span>
          </section>
          <section>
            <span>{selectedUser.nickname ? "Balance" : ""}</span>
            <span>{selectedUser.nickname ? "0" : ""}</span>
          </section>
        </StyledDetails>
      </section>
    </StyledUsersContainer>
  );
};

export default Users;
