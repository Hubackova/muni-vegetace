import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import { Consumer } from "../../layouts/Context";
import { cz, en } from "../../content/projects";
import project3 from "../../../static/images/projects/project3.jpg";

const Databases = ({ data }) => (
  <RightPanel>
    <Consumer>
      {({ int }) => {
        const projects = int === "en" ? en : cz;
        return (
          <GridWrapper>
            {Object.values(projects.projectsList)
              .slice(0, -1)
              .map(project => (
                <ResourceBox to={project.name} key={project.name} img={project3}>
                  <span>{project.title}</span>
                </ResourceBox>
              ))}
          </GridWrapper>
        );
      }}
    </Consumer>
  </RightPanel>
);

export default Databases;

Databases.propTypes = {
  text: PropTypes.object
};

const RightPanel = styled.div`
  flex: 1;
  border-left: 1px solid ${props => props.theme.grey};
  padding-left: 1em;
  padding-right: 1em;
  margin-left: 2em;
  line-height: 1em;
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin: 0;
    border: 0;
    border-top: 1px solid ${props => props.theme.grey};
    padding-top: 1em;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 10vw);
  grid-template-rows: repeat(2, 10vw);
  grid-gap: 1vw;
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
    background-size: 10vw;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
