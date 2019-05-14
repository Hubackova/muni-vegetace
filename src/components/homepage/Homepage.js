import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Consumer } from "../../layouts/Context";

const Homepage = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { title: { eq: "homepage" } }) {
          html
          frontmatter {
            name
            nameEn
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <Consumer>
          {({ int }) => (
            <div style={{ flex: 1 }}>
              <h2>{int === "en" ? data.markdownRemark.frontmatter.nameEn : data.markdownRemark.frontmatter.name}</h2>
              <div className={`project-body ${int}`} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </div>
          )}
        </Consumer>
      );
    }}
  />
);

export default Homepage;

Homepage.propTypes = {
  data: PropTypes.object
};
