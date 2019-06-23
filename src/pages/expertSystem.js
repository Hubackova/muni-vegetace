import React from "react";
import styled from "styled-components";

import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/expertSystem";

const ExpertSystemPage = () => (
  <Consumer>
    {({ int }) => {
      const data = int === "en" ? en : cz;
      return <Container>{data.body}</Container>;
    }}
  </Consumer>
);

ExpertSystemPage.propTypes = {};

export default ExpertSystemPage;
const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
`;