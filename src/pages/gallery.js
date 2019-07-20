import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Consumer } from "../layouts/Context";
import { galleryNames as pageNames, galleryNamesCz, galleryNamesEn } from "../content/galleries";

const GalleryType = ({ to, img, heading, query }) => {
  return (
    <div style={{ margin: "1em" }}>
      <Link to={to} state={{ query: query }}>
        <Img fixed={img} alt={heading} height="265px" />
      </Link>
      <div style={{ textAlign: "center" }}>{heading}</div>
    </div>
  );
};

GalleryType.propTypes = {
  heading: PropTypes.string,
  img: PropTypes.object,
  to: PropTypes.string,
  query: PropTypes.object
};

const PhotoGallery = ({ data }) => (
  <Consumer>
    {({ int }) => {
      const galleryNames = int === "en" ? galleryNamesEn : galleryNamesCz;

      const galleries = pageNames.map((galleryName, index) => {
        const img = data.allImageSharp.edges.filter(i => i.node.fixed.src.includes(galleryName))
        return (
          <GalleryType
            key={galleryName}
            to={`/gallery-${pageNames[index]}`}
            query={galleryName}
            img={img[0].node.fixed}
            heading={galleryNames[index]}
          />
        );
      });
      return <Container>{galleries}</Container>;
    }}
  </Consumer>
);

export default PhotoGallery;

PhotoGallery.propTypes = {
  data: PropTypes.object,
  query: PropTypes.object
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
`;

export const query = graphql`
  query {
    allImageSharp(filter: { fixed: { src: { regex: "/main_/" } } }) {
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
