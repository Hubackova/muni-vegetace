import React from "react";

import { Consumer } from "../layouts/Context";
import styled from "styled-components";
import ProjectBox from "../components/projects/ProjectBox";
import { cz, en } from "../content/projects";

const Projects = () => {
  return (
    <Container>
      <GridWrapper>
        <Consumer>
          {({ int }) => {
            const projects = int === "en" ? en : cz;
            return Object.keys(projects.projectsList).map(projectItem => {
              const project = projects.projectsList[projectItem];
              return <ProjectBox project={project} key={project.name} linkTo={project.name} />;
            });
          }}
        </Consumer>
      </GridWrapper>
    </Container>
  );
};

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
