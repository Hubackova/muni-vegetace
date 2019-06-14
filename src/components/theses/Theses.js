import React, {Fragment} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MainContainer from "../MainContainer";
import H2 from "../atoms/H2";
import Ul from "../atoms/Ul";

const Theses = ({ thesesData }) => {
  const getThesesList = data => thesesData[data].map(i => {
    return (
      <li key={i.name}>
        <A target="_blank" rel="noopener noreferrer" href={i.link}>
          {i.name}
        </A>, <span>{i.author}</span>, <span>{i.year}</span>
      </li>
    );
  });
  
  return (
    <ThesesContent>
      <h2>{thesesData.thesesTitle}</h2>
      <h3>{thesesData.phdTheses}</h3>
      <Ul>{getThesesList("phdThesesList")}</Ul>
      <h3>{thesesData.masterTheses}</h3>
      <Ul>{getThesesList("masterThesesList")}</Ul>
      <h3>{thesesData.bachelorTheses}</h3>
      <Ul>{getThesesList("bachelorThesesList")}</Ul>
    </ThesesContent>
  );
};

Theses.propTypes = {
  thesesData: PropTypes.object
};

export default Theses;

const A = styled.a`
  color: ${props => props.theme.darkMain};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ThesesContent = styled.div`
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin-top: 2em;
    border-top: 1px solid grey
  }
`;
