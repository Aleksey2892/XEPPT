import styled from "styled-components";
import cardBg from "../../../assets/images/card_background.png";

const CardTemplate = styled.li`
  border-radius: 15px;
`;

const Card = styled(CardTemplate)`
  width: 226px;
  height: 146px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${cardBg});
  background-size: cover;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`;

const EmptyCard = styled(CardTemplate)`
  left: 272px;
  width: 214px;
  height: 122px;
  padding: 27px 21px;
  background-color: #e1dcd0;

  p {
    margin-top: 22px;
    font-size: 20px;
    font-weight: 700;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
  }
`;

const AllSides = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LeftSide = styled(AllSides)`
  padding-bottom: 15px;
`;

const RightSide = styled(AllSides)`
  align-items: end;
`;

const Status = styled.div`
  padding: 0 15px;
  margin-top: 8px;
  width: max-content;
  height: 23px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  color: #be8317;
  background-color: #fdf1dc;

  div {
    font-size: 10px;
    font-weight: 500;
    color: #be8317;
  }
`;

const Balance = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #f5f5f5;
`;
const AvailableBalance = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`;

const CardNumber = styled(AvailableBalance)`
  white-space: nowrap;
`;

export {
  Card,
  EmptyCard,
  Status,
  Balance,
  AvailableBalance,
  CardNumber,
  LeftSide,
  RightSide,
};
