import React from "react";
import {
  TransactionListStyled,
  IconContainer,
  InfoBlock,
  ShowMoreBtn,
  Sum,
  EmptyList,
} from "./TransactionList.styled";
import { CreditCard, Wallet } from "../../../assets/svg";
import { useLocation } from "react-router-dom";

// Example array for incoming data
const transactionDataExampleArr = [
  {
    id: 1,
    serviceName: "Cineplex Inc.",
    date: "Sept 24",
    type: "Payment",
    sum: "-$42.50",
  },
  {
    id: 2,
    serviceName: "RBC Royal Bank",
    date: "Aug 1",
    type: "Transfer from bank",
    sum: "+$500.00",
  },
  {
    id: 3,
    serviceName: "Cineplex Inc.",
    date: "Sept 24",
    type: "Payment",
    sum: "-$42.50",
  },
];

export function TransactionList() {
  const loc = useLocation();
  const tabAll = loc.pathname === "/home";

  return (
    <>
      {tabAll && (
        <TransactionListStyled>
          {transactionDataExampleArr.map(data => {
            const { id, serviceName, date, type, sum } = data;
            const isPayment = type === "Payment";

            return (
              <li key={id}>
                <InfoBlock>
                  <IconContainer $payment={isPayment}>
                    {isPayment ? <CreditCard /> : <Wallet />}
                  </IconContainer>

                  <div>
                    <p className={"serviceName"}>{serviceName}</p>
                    <p className={"details"}>
                      {date}, {type}
                    </p>
                  </div>
                </InfoBlock>

                <Sum $payment={isPayment}>{sum}</Sum>
              </li>
            );
          })}
        </TransactionListStyled>
      )}

      {!tabAll && <EmptyList>There aren't any operations yet</EmptyList>}

      {tabAll && <ShowMoreBtn className={"mobile"}>Show more</ShowMoreBtn>}
    </>
  );
}
