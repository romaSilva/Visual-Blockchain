import React, { useEffect, useContext, useState } from "react";
import {
  StyledTransactionsContainer,
  StyledAddTx,
  StyledPendingTx,
} from "./style";
import GridHeader from "../../components/GridHeader";
import GlobalContext from "../../store/Context";
import Button from "../../components/Button";
import { ellipseString } from "../../utils/ellipseString";

const Transactions = () => {
  const {
    cryptoCurrency,
    updateTab,
    selectedUser,
    users,
    updatePendingTx,
  } = useContext(GlobalContext);

  const [amount, setAmount] = useState(0);
  const [selectValue, setSelectValue] = useState("0");

  useEffect(() => {
    updateTab("transactions");
  }, []);

  return cryptoCurrency ? (
    <StyledTransactionsContainer>
      <section className="AT">
        <GridHeader title="Add a Transaction" />
        <StyledAddTx>
          <div>{`From: ${selectedUser.nickname}`}</div>
          <div>
            <span>To: </span>
            <select
              name="user"
              id="user"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="0"> </option>
              {users.map(
                (user) =>
                  user.publicKey !== selectedUser.publicKey && (
                    <option key={user.publicKey} value={user.publicKey}>
                      {user.nickname}
                    </option>
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
            <Button
              title="Sign"
              updatePendingTx={updatePendingTx}
              newTx={{
                fromAddress: selectedUser.publicKey,
                toAddress: selectValue,
                amount,
              }}
              setAmount={setAmount}
            />
          </div>
        </StyledAddTx>
      </section>
      <section className="PT">
        <GridHeader title="Pending Transactions" />
        <StyledPendingTx>
          {cryptoCurrency.pendingTransactions.map(
            (tx) =>
              tx.toAddress && (
                <article>
                  <span>From: {ellipseString(tx.fromAddress, 17)}</span>
                  <span>To: {ellipseString(tx.toAddress, 17)}</span>
                  <span>Amount: {tx.amount}</span>
                  <span>Timestamp: {tx.timestamp}</span>
                </article>
              )
          )}
        </StyledPendingTx>
      </section>
    </StyledTransactionsContainer>
  ) : null;
};

export default Transactions;
