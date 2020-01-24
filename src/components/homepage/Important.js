import React from "react";
import PropTypes from "prop-types";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Consumer } from "../../layouts/Context";
import { cz, en } from "../../content/important";

const Important = () => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp(filter: { fixed: { src: { regex: "/important-/" } } }) {
          edges {
            node {
              id
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <RightPanel>
          <Consumer>
            {({ int }) => {
              const links = int === "en" ? en : cz;
              return (
                <GridWrapper>
                  {links.resourcesList.map((resource, index) => {
                    const img = data.allImageSharp.edges.filter(i =>
                      i.node.fixed.src.includes(resource.img)
                    );
                    const imgSrc = img.length ? img[0].node.fixed.src : null;
                    return (
                      <ResourceBox to={resource.linkTo} key={resource.name} img={imgSrc} target="_blanc">
                        {(index === 0 || index === 1) && <ImportantTitle>{resource.name}</ImportantTitle>}
                      </ResourceBox>
                    );
                  })}
                </GridWrapper>
              );
            }}
          </Consumer>
        </RightPanel>
      );
    }}
  />
);

export default Important;

Important.propTypes = {
  text: PropTypes.object,
  data: PropTypes.object
};

const ImportantTitle = styled.div`
display: flex;
align-self: flex-end;
text-align: center;
justify-content: center;
font-size: 1rem;
background-color: white;
width: 100%;
padding: 0 1rem;
`

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
  grid-template-columns: repeat(3, minmax(200px, 10vw));
  grid-template-rows: repeat(2, minmax(200px, 10vw));
  grid-gap: 1vw;
  @media (max-width: ${props => props.theme.largeDevice}) {
    grid-template-columns: repeat(3, minmax(20vw, 1fr));
    grid-template-rows: repeat(2, minmax(30vw, 1fr));
  }
  @media (max-width: 620px) {
    grid-template-columns: repeat(1, minmax(200px, 200px));
    grid-template-rows: repeat(6, minmax(200px, 200px));
  }
`;

const ResourceBox = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid grey;
  &:hover,
  &:focus,
  &.active {
    ::after {
      opacity: 1;
    }
  }
  ::after {
    content: "";
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: 50% 0%;
    background-size: 100%;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
