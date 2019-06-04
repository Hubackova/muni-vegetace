import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import researchgate from "../../../static/images/social-researchgate.png";
import is from "../../../static/images/social-is.png";

class PersonBox extends Component {
  state = { showDetail: false };

  toggleShowDetail = () => {
    this.setState(prevState => ({
      showDetail: !prevState.showDetail
    }));
  };

  render() {
    const { personInfo, data } = this.props;
    const { showDetail } = this.state;
    const hasDetail = personInfo.description.length > 0;
    return (
      <Fragment>
        <Box>
          <BoxPart style={{ flex: 1, paddingLeft: 0 }}>
            <div style={{ paddingTop: 10 }}>
              {personInfo.img ? (
                <img src={personInfo.img} alt={personInfo.name} height="265px" />
              ) : (
                <div style={{ height: 265, width: 200, border: "1px solid black" }} />
              )}
            </div>
          </BoxPart>
          <BoxPart style={{ flex: 6, minWidth: 260 }}>
            <Name>
              {personInfo.name}
              <div style={{ fontSize: "0.7em", color: "#778899" }}>{personInfo.position}</div>
            </Name>
            <Info>
              <div>
                <P>
                  <i className="fa fa-envelope fa-lg" style={{ color: "black", marginRight: 15 }} />
                  <span>{personInfo.email}</span>
                </P>
                {personInfo.phoneNumber && (
                  <P>
                    <i className="fa fa-phone fa-lg" style={{ marginRight: 15 }} />
                    {personInfo.phoneNumber}
                  </P>
                )}
                <P>
                  {personInfo.researchgate && (
                    <a target="_blank" rel="noopener noreferrer" href={personInfo.researchgate}>
                      <img src={researchgate} alt="researchgate" height="40px" />
                    </a>
                  )}
                  {personInfo.is && (
                    <a target="_blank" rel="noopener noreferrer" href={personInfo.is}>
                      <img src={is} alt="is" height="40px" />
                    </a>
                  )}
                </P>
              </div>
           
            <Description>
              <div>{personInfo.description}</div>
            </Description> </Info>
          </BoxPart>
        </Box>
      </Fragment>
    );
  }
}
export default PersonBox;

PersonBox.propTypes = {
  personInfo: PropTypes.object,
  data: PropTypes.object
};

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  @media (max-width: ${props => props.theme.largeDevice}) {
    padding: 0;
  }
`;

const Name = styled.h3`
  color: ${props => props.theme.main};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 20px;
  border-bottom: 0.08em solid rgb(229, 229, 229);
`;

const BoxPart = styled.div`
  padding: 0 1em;
`;

const P = styled.p`
  margin: 10px 0px;
`;

const Description = styled.div`
   padding-left: 2em; 
   flex: 4;
   @media (max-width: ${props => props.theme.extraLargeDevice}) {
    padding-left: 0; 
  }
`;

const Info = styled.div`
   display: flex; 
   flex-direction: row;
   @media (max-width: ${props => props.theme.extraLargeDevice}) {
    flex-direction: column;
  }
`;
