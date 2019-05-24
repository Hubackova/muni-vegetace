import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../layouts/Context";
import { homepageCz, homepageEn } from "../../content/homepage";

const Homepage = () => (
  <Consumer>
    {({ int }) => <div style={{ flex: 1 }}>{int === "en" ? homepageEn : homepageCz}</div>}
  </Consumer>
);

export default Homepage;

Homepage.propTypes = {
  data: PropTypes.object
};
