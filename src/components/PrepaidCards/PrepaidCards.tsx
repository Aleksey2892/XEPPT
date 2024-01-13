import React, { useEffect, useState } from "react";
import { withLoader } from "../HOCs";
import { CardList } from "./PrepaidCards.styled";
import { PrepaidCardItem } from "./PrepaidCardItem/PrepaidCardItem";

const CardListWithLoader = withLoader(CardList);

// Example array for incoming data
const cardDataExampleArr: cardDataType[] = [
  {
    id: 1,
    status: "Inactive",
    balance: "0.00",
    cardNumber: "4588 •••• •••• 0092",
  },
];

export type cardDataType = {
  id: number;
  status: "Active" | "Inactive";
  balance: string | number;
  cardNumber: string;
};

export function PrepaidCards() {
  const [data, setData] = useState<cardDataType[]>([]);

  useEffect(() => {
    setTimeout(() => setData(cardDataExampleArr), 1000);
  }, []);

  const isLoading = data.length < 1;

  return (
    <>
      <CardListWithLoader loading={isLoading}>
        {data.map(data => (
          <PrepaidCardItem {...data} key={data.id} />
        ))}

        <PrepaidCardItem empty />
      </CardListWithLoader>
    </>
  );
}
