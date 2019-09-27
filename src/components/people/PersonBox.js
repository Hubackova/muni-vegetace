import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { MailEmoji, PhoneEmoji } from "../atoms/Emoji";
import researchgate from "../../../static/images/social-researchgate.png";
import is from "../../../static/images/social-is.png";

const windowGlobal = typeof window !== "undefined" && window;
const isMobile = windowGlobal.innerWidth < 1024;

const PersonBox = ({ personInfo, msg }) => {
  const [detailVisibility, setDetailVisibility] = useState(!isMobile);
  const hasDetail = personInfo.description.length > 0;
  return (
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
              <MailEmoji mail={personInfo.email} />
            </P>
            {personInfo.phoneNumber && (
              <P>
                <PhoneEmoji phone={personInfo.phoneNumber} />
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

          {!detailVisibility && hasDetail && isMobile && (
            <ArrowIcon onClick={() => setDetailVisibility(true)}>
              <i className="fa fa-arrow-down" />
              <ArrowText style={{ color: "red", cursor: "pointer", marginLeft: 5 }}>
                {" "}
                {msg.showMore}
              </ArrowText>
            </ArrowIcon>
          )}
          {detailVisibility && hasDetail && (
            <div>
              <Description>
                <div>{personInfo.description}</div>
              </Description>
              {isMobile && (
                <ArrowIcon onClick={() => setDetailVisibility(false)}>
                  <i className="fa fa-arrow-up" />
                  <ArrowText style={{ color: "red", cursor: "pointer", marginLeft: 5 }}>
                    {msg.showLess}
                  </ArrowText>
                </ArrowIcon>
              )}
            </div>
          )}
        </Info>
      </BoxPart>
    </Box>
  );
};

export default PersonBox;

PersonBox.propTypes = {
  personInfo: PropTypes.object,
  data: PropTypes.object,
  msg: PropTypes.object
};

const Box = styled.div`
  font-size: 0.8em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
  margin-bottom: 1em;
  @media (max-width: ${props => props.theme.largeDevice}) {
    flex-direction: column;
    padding: 0;
  }
`;

const Name = styled.h3`
  color: ${props => props.theme.main};
  text-transform: uppercase;
  margin: 0;
  border-bottom: 0.08em solid rgb(229, 229, 229);
`;

const BoxPart = styled.div`
  padding: 0 1em;
  @media (max-width: ${props => props.theme.largeDevice}) {
    padding: 10px 0;
  }
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

const ArrowIcon = styled.div`
  color: ${props => props.theme.grey};
  text-decoration: none;
  cursor: pointer;
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;

const ArrowText = styled.span`
  color: red;
  cursor: pointer;
`;
