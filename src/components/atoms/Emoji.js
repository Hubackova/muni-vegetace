import React from "react";
import PropTypes from "prop-types";

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

Emoji.propTypes = {
  label: PropTypes.string,
  symbol: PropTypes.string
};

export default Emoji;

export const MailEmoji = ({ mail }) => {
  return (
    <span style={{ whiteSpace: "nowrap" }}>
      <Emoji symbol="📧" /> <a href={`mailto:${mail}`}>{mail}</a>
    </span>
  );
};

MailEmoji.propTypes = {
  mail: PropTypes.string
};

export const PhoneEmoji = ({ phone }) => {
  return (
    <span style={{ whiteSpace: "nowrap" }}>
      <Emoji symbol="☎️" /> {phone}
    </span>
  );
};

PhoneEmoji.propTypes = {
  phone: PropTypes.string
};
