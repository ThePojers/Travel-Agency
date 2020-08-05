import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';


class OrderSummary extends React.Component {

    static propTypes = {
      options: PropTypes.object.isRequired,
      tripCost: PropTypes.string,
    }


    render() {
      const { options, tripCost } = this.props;
      console.log(formatPrice(tripCost));
      return(
        <h2 className={styles.component}>
          Total:<strong>${calculateTotal(formatPrice(tripCost), options)}</strong>
        </h2>
      );
    }    
}

export default OrderSummary;