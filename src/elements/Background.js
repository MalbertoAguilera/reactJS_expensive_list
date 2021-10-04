import React from "react";
import styled from "styled-components";

import { ReactComponent as Puntos } from "./../img/puntos.svg";

const Background = () => {
  return(
        <>
            <PuntosArriba/>
            <PuntosAbajo/>
        </>
  );
};

export default Background;

const Svg = styled.svg`
  height: 50vh;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 0;
  path {
    fill: rgba(135, 182, 194, 0.15);
  }
`;

const PuntosArriba = styled(Puntos)`
  position: fixed;
  z-index: 1;
  top: 2.5rem; /* 40px */
  left: 2.5rem; /* 40px */
`;

const PuntosAbajo = styled(Puntos)`
  position: fixed;
  z-index: 1;
  bottom: 2.5rem; /* 40px */
  right: 2.5rem; /* 40px */
`;
