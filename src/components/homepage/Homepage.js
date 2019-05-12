import React from "react";
import PropTypes from "prop-types";

const Homepage = ({ data }) => {
  return (
    <div style={{ flex: 1 }}>
      <h2>{data.introHeader}</h2>
      <div>
        <p>
          {data.introText}
        </p>
      </div>
    </div>
  );
};

export default Homepage;

Homepage.propTypes = {
  data: PropTypes.object
};
