import React from "react";
import { cardDataType } from "../PrepaidCards";
import { Logo, Visa } from "../../../assets/svg";
import {
  Card,
  EmptyCard,
  Status,
  Balance,
  AvailableBalance,
  CardNumber,
  LeftSide,
  RightSide,
} from "./PrepaidCardItem.styled";
import { AddPlusButton } from "../../../index.styled";

interface CommonProps extends cardDataType {}
interface EmptyCard {
  empty: boolean;
}

type PrepaidCardItem = CommonProps | EmptyCard;

export const PrepaidCardItem = (props: PrepaidCardItem) => {
  if ("status" in props) {
    const { status, balance, cardNumber } = props as CommonProps;

    return (
      <Card>
        <LeftSide>
          <Status>
            <span>{status}</span>
          </Status>

          <div>
            <Balance>$ {balance}</Balance>
            <AvailableBalance>Available Balance</AvailableBalance>
          </div>

          <CardNumber>{cardNumber}</CardNumber>
        </LeftSide>

        <RightSide>
          <Logo />
          <Visa />
        </RightSide>
      </Card>
    );
  } else {
    return (
      <EmptyCard>
        <AddPlusButton>+</AddPlusButton>
        <p>Order a new card</p>
      </EmptyCard>
    );
  }
};
