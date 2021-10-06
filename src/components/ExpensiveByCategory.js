import React from "react";
import { Header, Titulo } from "./../elements/Header";
import { Helmet } from "react-helmet";
import ButtonGoBack from "../elements/ButtonGoBack";

const ExpensiveByCategory = () => {
  return (
    <>
      <Helmet>
        <title>Gasto por Categoria</title>
      </Helmet>

      <Header>
        <ButtonGoBack/>
        <Titulo>Gastos por Categoria</Titulo>
      </Header>
    </>
  );
};

export default ExpensiveByCategory;
