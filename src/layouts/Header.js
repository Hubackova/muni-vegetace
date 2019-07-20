import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import ImgSlider from "./ImgSlider";
import HeaderTop from "./HeaderTop";

import logo from "../../static/images/logo3.png";
import mainLogo from "../../static/images/mainLogo.png";

//query must be inline!!! not as a variable!
const Header = ({ isIndex, generalData }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { extension: { regex: "/(jpg)|(png)/" }, relativeDirectory: { eq: "homepage" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 3200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const imgs = data.images.edges.map(i => i.node.childImageSharp.fluid);
      // const sImgs = data.smallimages.edges.map(i => i.node.childImageSharp.fluid)
      return (
        <Fragment>
          <HeaderTop generalData={generalData} isIndex={isIndex} />
          <SubContainer>
            <LeftSide>
              <MainLogo src={mainLogo} alt="mainLogo" />
              <LogoLink href="http://www.botzool.sci.muni.cz" target="_blank">
                <Logo src={logo} alt="logo" />
              </LogoLink>
            </LeftSide>
            {isIndex && (
              <RightSide>
                <ImgSlider imgs={imgs} />
              </RightSide>
            )}
            {!isIndex && (
              <RightSide>
                <ImgSlider imgs={imgs} />
              </RightSide>
            )}
          </SubContainer>
        </Fragment>
      );
    }}
  />
);

export default Header;

Header.propTypes = {
  language: PropTypes.object,
  isIndex: PropTypes.bool,
  generalData: PropTypes.object
};

const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
  padding-bottom: 2em;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.main};
  @media (max-width: 2000px) {
    flex-wrap: wrap;
  }
`;
const LogoLink = styled.a`
  margin-left: 15px;
  margin-right: 2%;
  @media (max-width: 730px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 200px;
  @media (max-width: 1520px) {
    width: 190px;
  }
`;

const MainLogo = styled.img`
  max-width: 65%;
  margin-left: 2%;
  margin-right: 15px;
`;

const RightSide = styled.div`
  flex: 1;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;
