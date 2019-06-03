import React, { useEffect } from "react";

import { Consumer } from "../layouts/Context";
import styled from "styled-components";
import ProjectBox from "../components/projects/ProjectBox";
import { cz, en } from "../content/projects";

const Projects = () => {
  return (
    <Container>
      <Consumer>
        {({ int }) => {
          const projects = int === "en" ? en : cz;
          return Object.keys(projects.projectsList).map(projectItem => {
            const project = projects.projectsList[projectItem];
            return <ProjectBox project={project} key={project.name} linkTo={project.name} />;
          });
        }}
      </Consumer>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20vw, 20vw));
  grid-gap: 5px;
  justify-content: center;
  margin: 20px;
  @media (max-width: 1386px) {
    grid-template-columns: repeat(auto-fill, minmax(40vw, 40vw));
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(85vw, 85vw));
  }
`;
