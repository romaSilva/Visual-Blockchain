import React, { useEffect, useContext, useState } from "react";
import { StyledTransactionsContainer, StyledAddTx } from "./style";
import GridHeader from "../../components/GridHeader";
import GlobalContext from "../../store/Context";
import Button from "../../components/Button";

const Transactions = () => {
  const { updateTab, selectedUser, users } = useContext(GlobalContext);

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    updateTab("transactions");
  }, []);

  return (
    <StyledTransactionsContainer>
      <section className="AT">
        <GridHeader title="Add a Transaction" />
        <StyledAddTx>
          <div>{`From: ${selectedUser.nickname}`}</div>
          <div>
            <span>To: </span>
            <select name="" id="">
              {users.map(
                (user) =>
                  user.publicKey !== selectedUser.publicKey && (
                    <option value={user.publicKey}>{user.nickname}</option>
                  )
              )}
            </select>
          </div>
          <div>
            <span>Amount: </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <Button title="Sign" />
          </div>
        </StyledAddTx>
      </section>
      <section className="PT">
        <GridHeader title="Pending Transactions" />
      </section>
    </StyledTransactionsContainer>
  );
};

export default Transactions;
