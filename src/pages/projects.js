import React from "react";
import { Consumer } from "../layouts/Context";
import styled from "styled-components";
import ProjectBox from "../components/projects/ProjectBox";
import { projectsCz, projectsEn } from "../content/projects";

const Projects = () => {
  return (
    <Container>
      <Consumer>
        {({ int }) => {
          const projects = int === "en" ? projectsEn : projectsCz;
          return projects.projectsList.map(projectItem => (
            <ProjectBox
              project={projectItem}
              key={projectItem.name}
              linkTo={`projects/${projectItem.name}`}
            />
          ));
        }}
      </Consumer>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28vw, 28vw));
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