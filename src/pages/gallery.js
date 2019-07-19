import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Consumer } from "../layouts/Context";
import { galleryNamesCz, galleryNamesEn } from "../content/galleryCaptions";

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
  to: PropTypes.string
};

const PhotoGallery = ({ data }) => (
  <Consumer>
    {({ int }) => {
      const galleryNames = int === "en" ? galleryNamesEn : galleryNamesCz;
      const galleries = galleryNames.map((galleryName, index) => {
        return (
          <GalleryType
            key={galleryName}
            to={`/gallery-${galleryNamesEn[index]}`}
            query={galleryName}
            img={data.excursions.childImageSharp.fixed}
            heading={galleryName}
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
    excursions: file(relativePath: { eq: "gallery/excursions.jpg" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fieldwork: file(relativePath: { eq: "gallery/fieldwork.jpg" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
