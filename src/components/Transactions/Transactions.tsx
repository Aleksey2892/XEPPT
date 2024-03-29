import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ButtonsBox, Container } from "./Transactions.styled";
import { ShowMoreBtn } from "./TransactionList/TransactionList.styled";

export function Transactions() {
  const path = useLocation().pathname;
  const tabAll = path === "/home";

  return (
    <Container>
      <ButtonsBox>
        <div className={"container"}>
          <NavLink
            end
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "static"
            }
          >
            All
          </NavLink>

          <NavLink
            to={"/home/card"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "static"
            }
          >
            XEPPT Card
          </NavLink>
        </div>

        {tabAll && <ShowMoreBtn className={"tablet"}>Show more</ShowMoreBtn>}
      </ButtonsBox>

      <Outlet />
    </Container>
  );
}
