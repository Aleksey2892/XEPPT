import React from "react";
import { Menu, Logo, Notifications } from "../../assets/svg";
import {
  HeaderStyled,
  NotificationButton,
  RightSideSettings,
} from "./Header.styled";

interface IHeader {}

export function Header({}: IHeader): React.JSX.Element {
  return (
    <HeaderStyled>
      <button type="button">
        <Menu />
      </button>

      <Logo />

      <RightSideSettings>
        <p>{"FR"}</p>
        <NotificationButton>
          <Notifications />
        </NotificationButton>
      </RightSideSettings>
    </HeaderStyled>
  );
}
