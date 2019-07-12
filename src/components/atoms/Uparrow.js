import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { animateScroll } from "react-scroll";

const Uparrow = ({ text }) => {
  return (
    <UpArrow onClick={() => animateScroll.scrollToTop()}>
        <span >↑ {text}</span>
    </UpArrow>
  );
};

export default Uparrow;

Uparrow.propTypes = {
  text: PropTypes.string,
};

const UpArrow = styled.div`
  cursor: pointer;
  &:hover {
    span {
      font-weight: bold;
    }
  }

`