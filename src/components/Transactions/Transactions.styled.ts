import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonsBox = styled.div`
  margin-bottom: 17px;
  width: 100%;

  button {
    min-width: 66px;
    min-height: 36px;
    padding: 0 24px;
    border: 1px solid #db9e2f;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 500;
    color: #db9e2f;

    &:first-child {
      background-color: #db9e2f;
      color: #fdfdfd;
      margin-right: 16px;
    }
  }
`;

const TransactionList = styled.ul`
  margin-bottom: 16px;

  li {
    height: 56px;
    padding: 16px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e1dcd0;
    border-radius: 8px;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
`;

const InfoBlock = styled.div`
  padding-right: 10px;
  display: flex;
  color: #000000;

  p:first-child {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 600;
  }

  p:nth-child(2) {
    font-size: 12px;
    font-weight: 400;
  }
`;
const IconContainer = styled.div<{ $payment?: boolean }>`
  margin-right: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ $payment }) =>
    $payment ? "var(--primary-secondary-color)" : "var(--primary-first-color)"};
`;

const Sum = styled.div<{ $payment?: boolean }>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ $payment }) => ($payment ? "#4e4c47" : "#0F9D58")};
`;

const ShowMoreBtn = styled.button`
  padding: 10px 24px;
  width: 139px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 100px;
  color: var(--primary-first-color);
  text-align: center;
  background-color: var(--secondary-color);
`;

export {
  Container,
  ButtonsBox,
  TransactionList,
  InfoBlock,
  IconContainer,
  Sum,
  ShowMoreBtn,
};