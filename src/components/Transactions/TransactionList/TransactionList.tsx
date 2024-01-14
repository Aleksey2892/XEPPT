import React, { useEffect, useState } from "react";
import { withLoader } from "../../HOCs";
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

const TransactionListWithLoader = withLoader(TransactionListStyled);

// Example array for incoming data
const transactionDataExampleArr: TransactionDataType[] = [
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

type TransactionDataType = {
  id: number;
  serviceName: string;
  date: string;
  type: string;
  sum: string;
};

export function TransactionList() {
  const [data, setData] = useState<TransactionDataType[]>([]);
  const loc = useLocation();
  const tabAll = loc.pathname === "/";

  useEffect(() => {
    setTimeout(() => setData(transactionDataExampleArr), 1000);
  }, []);

  const isLoading = data.length < 1;

  return (
    <>
      {tabAll && (
        <>
          <TransactionListWithLoader loading={isLoading}>
            {data.map(({ id, serviceName, date, type, sum }) => {
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
          </TransactionListWithLoader>
        </>
      )}

      {!tabAll && <EmptyList>There aren't any operations yet</EmptyList>}

      {tabAll && <ShowMoreBtn className={"mobile"}>Show more</ShowMoreBtn>}
    </>
  );
}
