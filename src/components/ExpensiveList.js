import React from "react";
import { Header, Titulo } from "./../elements/Header";
import { Helmet } from "react-helmet";
import ButtonGoBack from "../elements/ButtonGoBack";

const ExpensiveList = () => {
  return (
    <>
      <Helmet>
        <title>Lista de Gastos</title>
      </Helmet>

      <Header>
        <ButtonGoBack />
        <Titulo>Lista de Gastos</Titulo>
      </Header>
    </>
  );
};

export default ExpensiveList;
