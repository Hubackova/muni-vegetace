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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      if (!data && !data.file&& !data.file.childImageSharp) return <div>...loading</div>;
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
