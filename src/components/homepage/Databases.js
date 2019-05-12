import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";

const Databases = ({ text }) => (
        <RightPanel>
          <p>
            <StyledLink href="http://www.sci.muni.cz/botany/vegsci/public.php?lang=cz">
              {text.publications}
            </StyledLink>
          </p>
          <p>
            <strong>{text.databases}</strong>
          </p>

          <p></p>

        </RightPanel>
      );


export default Databases;

Databases.propTypes = {
  text: PropTypes.object
};

const RightPanel = styled.div`
  flex: 1;
  border-left: 1px solid ${props => props.theme.grey};
  padding-left: 1em;
  padding-right: 1em;
  margin-left: 2em;
  line-height: 1em;
  @media (max-width: ${props => props.theme.largeDevice}) {
    margin: 0;
    border: 0;
    border-top: 1px solid ${props => props.theme.grey};
  }
`;

const StyledLink = styled.a`
  color: ${props => props.theme.main};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: ${props => props.theme.secondary};
  }
`;
