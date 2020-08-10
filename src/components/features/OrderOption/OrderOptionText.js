import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue, currentValue}) => (
  <input type='text' value={currentValue}  onChange={event => setOptionValue(event.currentTarget.value)} />   
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;