import React from "react";
import { withTitle } from "../HOCs";
import { AccountBalance } from "../AccountBalance";
import { PrepaidCards } from "../PrepaidCards";
import { Transactions } from "../Transactions";
import { BankAccount } from "../BankAccount";
import { Xeppt } from "../../assets/svg";
import {
  AddMoneyTop,
  LeftSideContainer,
  RightSideContainer,
} from "./Dashboard.styled";

const AccountBalanceWithTitle = withTitle(AccountBalance);
const PrepaidCardsWithTitle = withTitle(PrepaidCards);
const TransactionsWithTitle = withTitle(Transactions);
const BankAccountWithTitle = withTitle(BankAccount);

export function Dashboard() {
  return (
    <>
      <LeftSideContainer>
        <AccountBalanceWithTitle title={"XEPPT Account Balance"} />

        <PrepaidCardsWithTitle title={"XEPPT Prepaid Card"} />

        <TransactionsWithTitle title={"Transactions"} />
      </LeftSideContainer>

      <RightSideContainer>
        <AddMoneyTop className={"laptop"}>Add money</AddMoneyTop>
        <BankAccountWithTitle title={"Bank Account and Cards"} />
        <div className={"svg-container"}>
          <Xeppt />
        </div>
      </RightSideContainer>
    </>
  );
}
