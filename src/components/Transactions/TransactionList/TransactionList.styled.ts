import styled from "styled-components";

const TransactionListStyled = styled.ul`
  width: 100%;
  animation: slideFromLeft 1s ease-out;

  @media screen and (max-width: 1023px) {
    margin-bottom: 16px;
  }

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

  .serviceName {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  .details {
    font-size: 12px;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 16px;
    }
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
    $payment ? "var(--secondary-first-color)" : "var(--primary-first-color)"};

  @media (min-width: 768px) {
    margin-right: 24px;
    width: 50px;
    height: 50px;
  }
`;

const Sum = styled.div<{ $payment?: boolean }>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ $payment }) => ($payment ? "#4e4c47" : "#0F9D58")};

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const ShowMoreBtn = styled.button`
  padding: 10px 24px;
  width: 139px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 100px;
  color: var(--primary-first-color);
  text-align: center;
  background-color: var(--secondary-dark);

  &:hover {
    color: var(--secondary-dark);
    background-color: var(--secondary-first-color);
    transition: all 0.25s;
  }

  &.mobile {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &.tablet {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const EmptyList = styled.p`
  padding-top: 20px;
  width: 100%;
  font-size: 18px;
  color: var(--primary-second-color);
  font-weight: 700;
  animation: slideFromLeft 1s ease-out;

  @media screen and (min-width: 1024px) {
    text-align: center;
  }
`;

export {
  TransactionListStyled,
  InfoBlock,
  IconContainer,
  Sum,
  ShowMoreBtn,
  EmptyList,
};
