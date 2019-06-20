import React from "react";
import styled from "styled-components";

import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/vegetationCR";

const VegetationCRPage = () => (
  <Consumer>
    {({ int }) => {
      const data = int === "en" ? en : cz;
      return <Container>Vegetation CR - in progress</Container>;
    }}
  </Consumer>
);

VegetationCRPage.propTypes = {};

export default VegetationCRPage;
const Container = styled.div`
  margin: 0 auto;
  width: 84vw;
`;