import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (
  <div
    className={styles.checkbox}

  >

    {values.map(value => (
      <label key={value.id}>
        <input type='checkbox' value={value.id} checked={currentValue.includes(value.id)} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}></input>
        <span>{ReactHtmlParser(value.name)}</span>
        <span>{formatPrice(value.price)}</span>
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;