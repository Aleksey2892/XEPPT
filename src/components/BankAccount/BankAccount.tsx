import React from "react";
import {
  AccountCardList,
  ButtonsBox,
  AddTextButton,
  AddMoneyBottom,
} from "./BankAccount.styled";
import { CirclePlusButton } from "../templates";

// Example array for incoming data
const cardsDataExampleArr = [
  {
    id: 1,
    value: "Signature RBC visa ( ****3234)",
  },
  {
    id: 2,
    value: "TD Bank Debit ( ****0024)",
  },
];
export function BankAccount({ style }: { style?: React.CSSProperties }) {
  return (
    <div style={style}>
      <AccountCardList>
        {cardsDataExampleArr.map(({ id, value }) => (
          <li key={id}>{value}</li>
        ))}
      </AccountCardList>

      <ButtonsBox>
        <div className={"add-new"}>
          <CirclePlusButton />
          <AddTextButton>Link a card or bank</AddTextButton>
        </div>

        <AddMoneyBottom className={"mobile"}>Add money</AddMoneyBottom>
      </ButtonsBox>
    </div>
  );
}
