import React from "react";
import styled from "styled-components";

import { Consumer } from "../layouts/Context";
import Links from "../components/links/Links";
import { media } from "../content/links";
import { resources } from "../content/links";
import { cz, en } from "../content/general";

const ResourcesPage = () => (
  <Consumer>
    {({ int }) => (
      <Container>
        <GridWrapper>
          {["Česká národní fytocenologická databáze", "Vegetace ČR(monografie)", "JUICE", "Expertní systém", "Pladias", "Botanická fotogalerie", "European Vegetation Archive", "Bibliografie vegetace ČR"].map(i => (
            <ResourceBox key={i}>{i}</ResourceBox>
          ))}
        </GridWrapper>{" "}
      </Container>
    )}
  </Consumer>
);

ResourcesPage.propTypes = {};

export default ResourcesPage;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 20vw);
  grid-template-rows: repeat(2, 20vw);
  grid-gap: 1vw;
`;

const ResourceBox = styled.div`
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 84vw;
`;
