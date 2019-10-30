import React from "react";

import { Consumer } from "../layouts/Context";
import styled from "styled-components";
import { Link } from "gatsby";
import { cz, en } from "../content/projects";
import project3 from "../../static/images/projects/project3.jpg";


const Projects = () => (
  <Consumer>
    {({ int }) => {
      const projects = int === "en" ? en : cz;
      return (
        <Container>
          <GridWrapper>
            {Object.values(projects.projectsList).map(project => {
              return (
                <ResourceBox to={project.name} key={project.name} img={project3}>
                  <span>{project.title}</span>
                </ResourceBox>
              );
            })}
          </GridWrapper>
        </Container>
      );
    }}
  </Consumer>
);

export default Projects;

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

const ResourceBox = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:focus,
  &.active {
    color: white;
     ::after {
      opacity: 0.8;
    }
  }
  ::after {
    content: "";
    background-image: url(${props => props.img});
    background-size: 20vw;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
