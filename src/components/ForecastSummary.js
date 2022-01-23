import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon } = props;
  return (
    <div>
      <h2>{`${date},${temperature}, ${description}, ${icon}`}</h2>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
