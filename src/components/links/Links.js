import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainContainer from "../MainContainer";
import H2 from "../atoms/H2";
import Ul from "../atoms/Ul";

const Links = ({

  mediaData,
  resourcesData,
  data
}) => {
  const mediaList = mediaData.map(i => {
    return (
      <li key={i.name}>{i.date}
        <A target="_blank" rel="noopener noreferrer" href={i.link}>
          {i.name}
        </A>, {i.resource}
      </li>
    );
  });
  const resourcesList = resourcesData.map(i => {
    return (
      <li key={i.name}>
        <A target="_blank" rel="noopener noreferrer" href={i.link}>
          {i.name}
        </A>
      </li>
    );
  });
  return (
    <MainContainer>
      <H2> {data.media} </H2>
      <Ul>{mediaList}</Ul>
      <br/>
      <H2> {data.resources} </H2>
      <Ul>{resourcesList}</Ul>
    </MainContainer>
  );
};

Links.propTypes = {
  resourcesData: PropTypes.object,
  mediaData: PropTypes.object,
  data: PropTypes.object
};

export default Links;

const A = styled.a`
  color: ${props => props.theme.darkMain};
  text-decoration: none;
  margin-left: 0.5em;
  &:hover {
    text-decoration: underline;
  }
`;
