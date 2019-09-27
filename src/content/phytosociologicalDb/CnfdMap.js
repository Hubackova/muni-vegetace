import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";

const CnfdMap = ({ data }) => {
  if (!data && !data.allImageSharp) return <div>...loading</div>;
  return <Img fixed={data.allImageSharp && data.allImageSharp.edges[0].node.fluid} alt="CnfdMap" />;
};
export default CnfdMap;

export const query = graphql`
  query {
    file(relativePath: { regex: "/cnfdMap" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
