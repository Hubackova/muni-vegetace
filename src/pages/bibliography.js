import React from "react";
import styled from "styled-components";

import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/bibliography";

const BibliographyPage = () => (
  <Consumer>
    {({ int }) => {
      const data = int === "en" ? en : cz;
      return <Container>{data.body}</Container>;
    }}
  </Consumer>
);

BibliographyPage.propTypes = {};

export default BibliographyPage;
const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
`;