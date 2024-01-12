import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Logo, Notifications, ArrowDown } from "../../assets/svg";
import {
  HeaderStyled,
  TabList,
  CircleButton,
  RightSideSettings,
  AccountButton,
} from "./Header.styled";

interface IHeader {}

export function Header({}: IHeader): React.JSX.Element {
  return (
    <HeaderStyled>
      <button className={"button-menu"} type="button">
        <Menu />
      </button>

      <Logo />

      <TabList>
        <li className={"list-item"}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "static"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>

        <li className={"list-item"}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "static"
            }
            to={"card"}
          >
            XEPPT Card
          </NavLink>
        </li>

        <li className={"list-item"}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "static"
            }
            to={"statements"}
          >
            Statements
          </NavLink>
        </li>
      </TabList>

      <RightSideSettings>
        <span className={"letters"}>{"FR"}</span>
        <CircleButton className={"notifications"}>
          <Notifications />
        </CircleButton>

        <CircleButton className={"circle-name"}>{"PM"}</CircleButton>

        <AccountButton>
          <span className={"user-name"}>{"Peter Morgan"}</span>
          <ArrowDown />
        </AccountButton>
      </RightSideSettings>
    </HeaderStyled>
  );
}
