import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({price, currentValue, setOptionValue, limits}) => (
  <div
    className={styles.numbers}
  >
    <input type='number' className={styles.inputSmall} value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(event.currentTarget.value)} />
    <span>{price}</span>
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;