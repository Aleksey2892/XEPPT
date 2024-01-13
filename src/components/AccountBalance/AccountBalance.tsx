import React, { useEffect, useState } from "react";
import { withLoader } from "../HOCs";
import { BalanceItem } from "./BalanceItem";
import canadaIcon from "../../assets/images/canada.png";
import { BalanceList } from "./AccountBalance.styled";

const BalanceListWithLoader = withLoader(BalanceList);

// Example array for incoming data
const balanceDataExampleArr: BalanceDataType[] = [
  { id: 1, src: canadaIcon, balance: "191.0" },
];

export type BalanceDataType = {
  id: number;
  src: string;
  balance: number | string;
};

export function AccountBalance() {
  const [data, setData] = useState<BalanceDataType[]>([]);

  useEffect(() => {
    setTimeout(() => setData(balanceDataExampleArr), 1000);
  }, []);

  const isLoading = data.length < 1;

  return (
    <>
      <BalanceListWithLoader loading={isLoading}>
        {data.map(data => (
          <BalanceItem {...data} key={data.id} />
        ))}
      </BalanceListWithLoader>
    </>
  );
}
