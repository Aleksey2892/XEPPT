import React from "react";
import { BalanceDataType } from "../AccountBalance";
import { Balance } from "./BalanceItem.styled";

interface IValueItem extends BalanceDataType {}

export function BalanceItem({ src, balance }: IValueItem) {
  return (
    <Balance>
      <div className={"image-container"}>
        <img src={src} alt={"country flag"} />
      </div>

      <p className={"balance"}>${balance}</p>
    </Balance>
  );
}
