import React from "react";
import { PrepaidCardItem } from "./PrepaidCardItem/PrepaidCardItem";
import { CardsList } from "./PrepaidCards.styled";

// Example array for incoming data
const cardDataExampleArr: cardDataType[] = [
  {
    id: 1,
    status: "Inactive",
    balance: "0.00",
    cardNumber: "4588 •••• •••• 0092",
  },
  // {
  //   id: 2,
  //   status: "Active",
  //   balance: 230.6,
  //   cardNumber: "4955 •••• •••• 1200",
  // },
];

export type cardDataType = {
  id: number;
  status: "Active" | "Inactive";
  balance: string | number;
  cardNumber: string;
};

export function PrepaidCards(): React.JSX.Element {
  return (
    <CardsList>
      {cardDataExampleArr.map((data) => (
        <PrepaidCardItem {...data} key={data.id} />
      ))}

      <PrepaidCardItem empty />
    </CardsList>
  );
}
