import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo, ContenedorHeader, ContenedorBotones } from './elements/Header';
import Button from './elements/Button';

const App = () => {
  return(
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Button to='/categories'>Categorias</Button>
            <Button to='/list'>Lista de Gastos</Button>
            <Button>X</Button>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
}

export default App;