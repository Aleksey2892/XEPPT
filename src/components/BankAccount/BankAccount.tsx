import React, { useEffect, useState } from "react";
import { withLoader } from "../HOCs";
import { Plus } from "../../assets/svg";
import { CircleButton } from "../../index.styled";
import {
  AccountCardList,
  ButtonsBox,
  AddTextButton,
  AddMoneyBottom,
} from "./BankAccount.styled";

const AccountCardListWithLoader = withLoader(AccountCardList);

// Example array for incoming data
const cardsDataExampleArr: CardDataType[] = [
  {
    id: 1,
    value: "Signature RBC visa ( ****3234)",
  },
  {
    id: 2,
    value: "TD Bank Debit ( ****0024)",
  },
];

export type CardDataType = {
  id: number;
  value: string;
};

export function BankAccount() {
  const [data, setData] = useState<CardDataType[]>([]);

  useEffect(() => {
    setTimeout(() => setData(cardsDataExampleArr), 1000);
  }, []);

  const isLoading = data.length < 1 || undefined;

  return (
    <div>
      <AccountCardListWithLoader loading={isLoading}>
        {data.map(({ id, value }) => (
          <li key={id}>{value}</li>
        ))}
      </AccountCardListWithLoader>

      <ButtonsBox>
        <div className={"add-new"}>
          <CircleButton>
            <Plus />
          </CircleButton>
          <AddTextButton>Link a card or bank</AddTextButton>
        </div>

        <AddMoneyBottom className={"mobile"}>Add money</AddMoneyBottom>
      </ButtonsBox>
    </div>
  );
}
