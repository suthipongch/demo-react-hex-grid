import "./App.css";

import {
  HexGrid,
  HexText,
  Hexagon,
  OrientationsEnum,
  gridGenerator,
} from "@kousenlsn/react-hex-grid";

import React from "react";
// import logo from "./logo.svg";
import styled from "styled-components";

const Wrapper = styled.section`
  background: black;

  width: 100%;
  height: 100%;

  touch-action: none;

  svg g {
    fill: lightblue;
  }

  svg g polygon {
    stroke: blue;
    stroke-width: 0.2;
    transition: fill-opacity 0.2s;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  // const hexagons = gridGenerator.rectangle(4, 4, true, true);
  const hexagons = gridGenerator.hexagon(2, true);
  const testHex = hexagons.filter((hex) => hex.y >= 0);
  console.log(hexagons);
  console.log(testHex);
  return (
    <Container>
      <Wrapper>
        <HexGrid
          width="100%"
          height="100%"
          spacing="1.1"
          hexSize={4}
          origin={{ x: 0, y: 0 }}
          // orientation={OrientationsEnum.pointy}
          orientation={OrientationsEnum.flat}
        >
          {testHex.map((hex, i) => (
            <Hexagon key={i} id={i} coordinates={hex} cellStyle={{ stroke: "red", fill: "yellow" }}>
              <HexText className="CustomHexagon"></HexText>
            </Hexagon>
          ))}
        </HexGrid>
      </Wrapper>
    </Container>
  );
}

export default App;