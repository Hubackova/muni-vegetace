import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Gallery from "react-grid-gallery";
import Img from "gatsby-image";

import { Consumer } from "../layouts/Context";
import { galleryLabelsEn, galleryLabelsCz } from "../content/galleries";
import GalleryContainer from "../components/GalleryContainer";

const gallery = ({ data: { allImageSharp }, location }) => {
  return (
    <Consumer>
      {({ int }) => {
        const galleryName = location.pathname.slice(
          location.pathname.lastIndexOf("-") + 1,
          location.pathname.lenght
        );

        const subgalleries = location.state && location.state.subgalleries;
        const subgalleriesMainImgs =
          location.state && location.state.subgalleriesMainImgs;
        const subgalleriesFolders =
          subgalleries &&
          !!subgalleries.length &&
          subgalleries.map(subgallery => {
            const img = subgalleriesMainImgs.filter(imgSub => {
              return (
                imgSub[0] && imgSub[0].node.fixed.src.includes(subgallery.key)
              );
            });

            return (
              <div
                style={{
                  margin: "1em",
                  alignItems: "center",
                  maxWidth: 450,
                  display: "inline-block"
                }}
                key={subgallery.key}
              >
                <Link to={`gallery-${subgallery.key}`}>
                  {img[0] && (
                    <Img
                      fixed={img[0][0].node.fixed}
                      alt={"heading"}
                      height="265px"
                    />
                  )}
                </Link>
                <div
                  style={{
                    textAlign: "center"
                  }}
                >
                  {int === "en" ? subgallery.labelEn : subgallery.labelCz}
                </div>
              </div>
            );
          });
        const captions = int === "en" ? galleryLabelsEn : galleryLabelsCz;
        console.log(captions, galleryName)
        const imgs =
          allImageSharp && allImageSharp.edges.map(i => i.node.fluid);
        const PHOTO_SET = imgs.map((i, index) => {
          const caption = captions[galleryName]
            ? captions[galleryName][index]
            : "";
          return { src: i.src, thumbnail: i.src, caption: caption };
        });
        return (
          <React.Fragment>
            <GalleryContainer>
              {subgalleriesFolders}
              <Gallery images={PHOTO_SET} />
            </GalleryContainer>
          </React.Fragment>
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
