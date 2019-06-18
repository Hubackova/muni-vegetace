import React from "react";
import styled from "styled-components";

import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/resources";

const ResourcesPage = () => (
  <Consumer>
    {({ int }) => {
      const data = int === "en" ? en : cz;
      return (
        <Container>
          <GridWrapper>
            {data.resourcesList.map(resource => (
              <ResourceBox
                href={resource.link}
                key={resource.name}
                target="_blanc"
              >
                {resource.name}
              </ResourceBox>
            ))}
          </GridWrapper>
        </Container>
      );
    }}
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

const Container = styled.div`
  margin: 0 auto;
  width: 84vw;
`;

const ResourceBox = styled.a`
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: lightGrey;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:focus,
  &.active {
    color: black;
    background-color: darkGrey;
  }
`;
