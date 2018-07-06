import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export const Select = ({ label, onChange, value }) => (
  <div>
    <p>{label}:</p>
    <select onChange={onChange} value={value}>
      <option value="week">Last week</option>
      <option value="month">Last month</option>
    </select>
  </div>
);

Select.propTypes = propTypes;
