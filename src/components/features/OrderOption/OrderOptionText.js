import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionDropdown = () => (
  <input type='text' >
      
  </input>
);

OrderOptionDropdown.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDropdown;