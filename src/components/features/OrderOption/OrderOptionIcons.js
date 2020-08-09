import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import ReactHtmlParser from 'react-html-parser';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div
    className={styles.dropdown}
  >
    {required ? '' : (
      <div onClick={() => setOptionValue('')}>
        <Icon name='times-circle'></Icon>
        <span>none</span>
      </div>
    )}

    {values.map(value => (
      <div key={value.id} className={currentValue === value.id ? styles.iconActive + ' ' + styles.icon : styles.icon}   onClick={() => setOptionValue(value.id) }>
        <Icon name={value.icon}></Icon>
        <span>{ReactHtmlParser(value.name)}</span>
        <span>{formatPrice(value.price)}</span>
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;