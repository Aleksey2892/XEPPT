import React from "react";
import { cardDataType } from "../PrepaidCards";
import { Logo, Plus, Visa } from "../../../assets/svg";
import { CircleButton } from "../../../index.styled";
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

interface CommonProps extends cardDataType {}

interface EmptyCardType {
  empty: boolean;
}

type PrepaidCardItemType = CommonProps | EmptyCardType;

export const PrepaidCardItem = (props: PrepaidCardItemType) => {
  if ("empty" in props) {
    return (
      <EmptyCard>
        <CircleButton>
          <Plus />
        </CircleButton>
        <p>Order a new card</p>
      </EmptyCard>
    );
  } else {
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
  }
};
