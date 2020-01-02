import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/resources";

const ResourcesPage = ({ data: imgData }) => (
  <Consumer>
    {({ int }) => {
      console.log(imgData);
      const data = int === "en" ? en : cz;
      return (
        <Container>
          <GridWrapper>
            {data.resourcesList.map(resource => {
              const img = imgData.allImageSharp.edges.filter(i =>
                i.node.fixed.src.includes(resource.img)
              );
              const imgSrc = img.length ? img[0].node.fixed.src : null
              console.log(img);
              return resource.link ? (
                <ResourceBox href={resource.link} key={resource.name} title={resource.name} target="_blanc" img={imgSrc}>
                  {!imgSrc ? resource.name: ""}
                </ResourceBox>
              ) : (
                <ResourceBoxLink to={resource.linkTo} key={resource.name} target="_blanc"  img={imgSrc}>
                  {!imgSrc ? resource.name: ""}
                </ResourceBoxLink>
              );
            })}
          </GridWrapper>
        </Container>
      );
    }}
  </Consumer>
);

ResourcesPage.propTypes = { data: PropTypes.object };

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
    background-position: 50% 50%;
    background-size: 20vw;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

const ResourceBoxLink = styled(Link)`
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
    background-position: 50% 50%;
    background-size: 20vw;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const query = graphql`
  query {
    allImageSharp(filter: { fixed: { src: { regex: "/resources-/" } } }) {
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
`;
