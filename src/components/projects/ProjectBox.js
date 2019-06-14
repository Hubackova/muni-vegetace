import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import projectImg from "../../../static/images/projects/project1.jpg";

class ProjectBox extends Component {
  render() {
    const { project, linkTo, isImageOnly } = this.props;

    return (
      <Box>
        <StyledLink to={linkTo}>
          {/* {fluid && <Img fluid={fluid} style={{width: "90%"}} />} */}
          <ImgBox src={projectImg}  />
          <Name>{project.title}</Name>{" "}
        </StyledLink>
      </Box>
    );
  }
}
export default ProjectBox;

const Box = styled.div`
  display: flex;
  border: 1px solid grey;
`;

const ImgBox = styled.img`
  height: 13vw;
  width: 100%;
`;


const Name = styled.h5`
  height: 5vw;
  color: ${props => props.theme.lightblue};
  text-transform: uppercase;
`;

//todo: similar with staff
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
