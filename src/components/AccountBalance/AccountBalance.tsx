import React from "react";
import { BalanceItem } from "./BalanceItem";
import canadaIcon from "../../assets/images/canada.png";

// Example array for incoming data
const balanceDataExampleArr: BalanceDataType[] = [
  { id: 1, src: canadaIcon, balance: "191.0" },
  // { id: 2, src: canadaIcon, balance: 421.3 },
  // { id: 3, src: canadaIcon, balance: "1900.0" },
];

export type BalanceDataType = {
  id: number;
  src: string;
  balance: number | string;
};

export function AccountBalance(): React.JSX.Element {
  return (
    <ul>
      {balanceDataExampleArr.map((data) => (
        <BalanceItem {...data} key={data.id} />
      ))}
    </ul>
  );
}
