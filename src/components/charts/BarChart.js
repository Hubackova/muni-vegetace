import React from "react";
import PropTypes from "prop-types";
import useChart from "./useChart";

const BarChart = ({ data, labels, tooltipLabel, title, backgroundColor }) => {
  const graphContent = useChart({
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: tooltipLabel,
          backgroundColor,
          data 
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: title
      }
    }
  });

  return <canvas ref={graphContent} />;
};

export default BarChart;

BarChart.propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  title: PropTypes.string,
  tooltipLabel: PropTypes.string,
  backgroundColor: PropTypes.oneOf(PropTypes.array, PropTypes.string)
};

BarChart.defaultProps = {
  backgroundColor: "#C0C844",
  title: "",
  tooltipLabel: ""
};
