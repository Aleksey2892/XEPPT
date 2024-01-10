import React from "react";
import { withTitle } from "../HOCs";
import { AccountBalance } from "../AccountBalance";
import { PrepaidCards } from "../PrepaidCards";
import { Transactions } from "../Transactions";
import { BankAccount } from "../BankAccount";
import { AddMoneyBtn } from "./Dashboard.styled";

const AccountBalanceWithTitle = withTitle(AccountBalance);
const PrepaidCardsWithTitle = withTitle(PrepaidCards);
const TransactionsWithTitle = withTitle(Transactions);
const BankAccountWithTitle = withTitle(BankAccount);

interface IMain {}

export function Dashboard({}: IMain): React.JSX.Element {
  return (
    <>
      <AccountBalanceWithTitle title="XEPPT Account Balance" />

      <PrepaidCardsWithTitle title="XEPPT Prepaid Card" />

      <TransactionsWithTitle title="Transactions" />

      <BankAccountWithTitle
        title="Bank Account and Cards"
        style={{ marginBottom: 0 }}
      />

      <AddMoneyBtn>Add money</AddMoneyBtn>
    </>
  );
}
