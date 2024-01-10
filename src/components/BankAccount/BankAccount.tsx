import React from "react";
import {
  AccountCardList,
  ButtonsBox,
  AddTextButton,
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
export function BankAccount(props: { style?: React.CSSProperties }) {
  return (
    <div style={props.style}>
      <AccountCardList>
        {cardsDataExampleArr.map(({ id, value }) => (
          <li key={id}>{value}</li>
        ))}
      </AccountCardList>

      <ButtonsBox>
        <CirclePlusButton />
        <AddTextButton>Link a card or bank</AddTextButton>
      </ButtonsBox>
    </div>
  );
}
