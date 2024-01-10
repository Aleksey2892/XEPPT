import React from "react";
import { BalanceDataType } from "../AccountBalance";
import { Balance } from "./BalanceItem.styled";

interface IValueItem extends BalanceDataType {}

export function BalanceItem({ src, balance }: IValueItem): React.JSX.Element {
  return (
    <Balance>
      <div>
        <img src={src} alt={"country flag"} />
      </div>

      <p>${balance}</p>
    </Balance>
  );
}
