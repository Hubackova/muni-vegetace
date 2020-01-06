import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

const CnfdMap = ({altText}) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { regex: "/cnfd_map/" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      if (!data && !data.file) return <div>...loading</div>;
      return (
        <Img
          fluid={data.file.childImageSharp.fluid}
          width="70%"
          alt={altText}
        />
      );
    }}
  />
);

export default CnfdMap;
