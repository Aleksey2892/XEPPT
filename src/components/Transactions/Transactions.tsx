import React from "react";
import { CreditCard, Wallet } from "../../assets/svg";
import {
  ButtonsBox,
  TransactionList,
  InfoBlock,
  IconContainer,
  Sum,
  ShowMoreBtn,
  Container,
} from "./Transactions.styled";

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

export function Transactions(): React.JSX.Element {
  return (
    <Container>
      <ButtonsBox>
        <div>
          <button type="button" className={"action"}>
            All
          </button>
          <button type="button" className={"action"}>
            XEPPT Card
          </button>
        </div>

        <ShowMoreBtn className={"tablet"}>Show more</ShowMoreBtn>
      </ButtonsBox>

      <TransactionList>
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
      </TransactionList>

      <ShowMoreBtn className={"mobile"}>Show more</ShowMoreBtn>
    </Container>
  );
}
