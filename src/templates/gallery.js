import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Gallery from "react-grid-gallery";

import { Consumer } from "../layouts/Context";
import { galleryLabelsEn, galleryLabelsCz } from "../content/galleries";
import GalleryContainer from "../components/GalleryContainer";

const gallery = ({ data: { allImageSharp }, location }) => {
  const galleryName = location.pathname.slice(
    location.pathname.lastIndexOf("-") + 1,
    location.pathname.lenght
  );
  return (
    <Consumer>
      {({ int }) => {
        const captions = int === "en" ? galleryLabelsEn : galleryLabelsCz;
        const imgs = allImageSharp && allImageSharp.edges.map(i => i.node.fluid);
        const PHOTO_SET = imgs.map((i, index) => {
          const caption = captions[galleryName][index];
          return { src: i.src, thumbnail: i.src, caption: caption };
        });
        return (
          <GalleryContainer>
            <Gallery images={PHOTO_SET} />
          </GalleryContainer>
        );
      }}
    </Consumer>
  );
};

export default gallery;

gallery.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object
};

export const query = graphql`
  query($imgsRegex: String!) {
    allImageSharp(
      filter: { fluid: { src: { regex: $imgsRegex } } }
      sort: { fields: [fluid___originalName], order: ASC }
    ) {
      edges {
        node {
          id
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`;
