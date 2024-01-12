import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Logo, Notifications, ArrowDown } from "../../assets/svg";
import {
  HeaderStyled,
  TabList,
  CircleButtonStyled,
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

      <Link className={"logo-container"} to={"/home"}>
        <Logo />
      </Link>

      <TabList>
        <li className={"list-item"}>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "static"
            }
            to={"/home"}
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
        <CircleButtonStyled className={"notifications"}>
          <Notifications />
        </CircleButtonStyled>

        <CircleButtonStyled className={"circle-name"}>
          {"PM"}
        </CircleButtonStyled>

        <AccountButton>
          <span className={"user-name"}>{"Peter Morgan"}</span>
          <ArrowDown />
        </AccountButton>
      </RightSideSettings>
    </HeaderStyled>
  );
}
