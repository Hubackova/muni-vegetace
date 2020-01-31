import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Consumer } from "../layouts/Context";
import Backarrow from "../components/atoms/Backarrow";
import { cz, en } from "../content/phytosociologicalDb/phytosociologicalDb-fytoonline";

const PhytoOnline = () => (
  <Consumer>
    {({ int }) => {
      const data = int === "en" ? en : cz;
      return (
        <Container>
          <Backarrow to="/phytosociologicalDb/" />
          {data.body}
        </Container>
      );
    }}
  </Consumer>
);

PhytoOnline.propTypes = {};

export default PhytoOnline;

const Container = styled.div`
  margin: 0 auto;
  width: 84vw;
`;
