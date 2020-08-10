import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue}) => (
  <input type='text'  onChange={event => setOptionValue(event.currentTarget.value)} />   
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;