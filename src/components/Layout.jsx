import React from "react";
import styled from "@emotion/styled";
import {
  Outlet,
} from "react-router-dom";
const Contenedor = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 170px auto;
  @media (min-width: 1025px) {
    height: 600px;
    width: 940px;
    grid-template-rows: unset;
    grid-template-columns: 290px auto;
    border-radius: 10px;
    background-color: hsl(0, 0%, 100%);
  }
`;
const Aside = styled.aside`
  background-image: url("/assets/images/bg-sidebar-mobile.svg");
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1025px) {
    background-image: url("/assets/images/bg-sidebar-desktop.svg");
    width: 95%;
    background-position: center;
    margin-left: 5%;
    background-size: contain;
  }
`;
const Main = styled.main`
  display: flex;
  position: relative;
  @media (min-width: 1025px) {
    width: 460px;
    margin: 0 auto;
    height: 515px;
    margin-top: 50px;
  }
`;

const Layout = () => {
  return (
    <Contenedor>
      <Aside></Aside>
      <Main>
        <Outlet />
      </Main>
    </Contenedor>
  );
};

export default Layout;
