import React from "react";
import styled from "styled-components";

import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/phytosociologicalDb";

const PhytosociologicalDbPage = () => (
  <Consumer>
    {({ int }) => {
     
      const data = int === "en" ? en : cz;
      return <Container>Phytosociological Db Page - in progress</Container>
    }}
  </Consumer>
);

PhytosociologicalDbPage.propTypes = {};

export default PhytosociologicalDbPage;

const Container = styled.div`
  margin: 0 auto;
  width: 84vw;
`;