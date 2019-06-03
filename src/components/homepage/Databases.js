import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import ProjectBox from "../../components/projects/ProjectBox";
import { Consumer } from "../../layouts/Context";
import { cz, en } from "../../content/projects";
import projectImg from "../../../static/images/projects/project1.jpg";

const Databases = ({ data }) => (
  <RightPanel>
    <Consumer>
      {({ int }) => (
        <Container>
          <img src={projectImg} width="100%" />
          <img src={projectImg} width="100%" />
          <img src={projectImg} width="100%" />
          <img src={projectImg} width="100%" />
        </Container>
      )}
    </Consumer>
  </RightPanel>
);

export default Databases;

Databases.propTypes = {
  text: PropTypes.object
};
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(20vw, 20vw));
  grid-gap: 5px;
  justify-content: center;

`;

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
  }
`;
