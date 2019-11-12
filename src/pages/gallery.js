import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Consumer } from "../layouts/Context";
import {
  galleryNames as pageNames,
  galleryNamesCz,
  galleryNamesEn
} from "../content/galleries";

const GalleryType = ({
  to,
  img,
  heading,
  query,
  subgalleries,
  subgalleriesMainImgs
}) => {
  return (
    <div style={{ margin: "1em" }}>
      <Link to={to} state={{ query, subgalleries, subgalleriesMainImgs }}>
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
  query: PropTypes.object,
  subgalleries: PropTypes.array,
  subgalleriesMainImgs: PropTypes.array,
};

const PhotoGallery = ({ data }) => (
  <Consumer>
    {({ int }) => {
      const galleryNames = int === "en" ? galleryNamesEn : galleryNamesCz;

      const galleries = pageNames.map((galleryName, index) => {
        const img = data.allImageSharp.edges.filter(i =>
          i.node.fixed.src.includes(galleryName.main)
        );

        const subgalleriesMainImgs =
          galleryName.subgalleries &&
          galleryName.subgalleries.length &&
          galleryName.subgalleries.map(subgallery => {
            return data.allImageSharp.edges.filter(img =>
              img.node.fixed.src.includes(subgallery.key)
            );
          });

        return (
          <GalleryType
            key={galleryName.main}
            to={`/gallery-${pageNames[index].main}`}
            query={galleryName.main}
            img={img[0].node.fixed}
            heading={galleryNames[index]}
            subgalleries={galleryName.subgalleries || []}
            subgalleriesMainImgs={subgalleriesMainImgs}
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
