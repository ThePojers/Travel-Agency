import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

class OrderForm extends React.Component {

    static propTypes = {
      tripCost: PropTypes.string.isRequired,
      options: PropTypes.object,
    }

    render() {
      const { tripCost, options} = this.props;
      console.log(options);
      return(
        <Row>
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options} />
          </Col>
        </Row>
      );
    }    
}

export default OrderForm;