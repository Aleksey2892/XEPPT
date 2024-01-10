import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 0 27px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3d3d3d;
  color: var(--primary-color);
`;

const NotificationButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--primary-secondary-color);
`;

const RightSideSettings = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin-right: 10px;
    color: var(--primary-first-color);
  }
`;

export { HeaderStyled, NotificationButton, RightSideSettings };
