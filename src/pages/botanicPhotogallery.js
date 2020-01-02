import React from "react";
import styled from "styled-components";

import { Consumer } from "../layouts/Context";
import { cz, en } from "../content/botanicPhotogallery";

const BotanicPhotogalleryPage = () => (
  <Consumer>
    {({ int }) => {
      const data = int === "en" ? en : cz;
      return <Container>{data.body}</Container>;
    }}
  </Consumer>
);

BotanicPhotogalleryPage.propTypes = {};

export default BotanicPhotogalleryPage;

const Container = styled.div`
  margin: 0 auto;
  width: 80vw;
`;
