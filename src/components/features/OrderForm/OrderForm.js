import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {Row, Col} from 'react-flexbox-grid';

class OrderForm extends React.Component {

    static propTypes = {
      tripCost: PropTypes.string.isRequired,
      options: PropTypes.object,
      pricing: PropTypes.array,
      setOrderOption: PropTypes.func,
    }

    render() {
      const { tripCost, options, setOrderOption} = this.props;
      console.log(options);
      return(
        <Row>
          {pricing.map(type =>{
            console.log(type.id);
            return <Col xs={4} key={type.id}>
              <OrderOption {...type} currentValue={options[type.id]} setOrderOption={setOrderOption}></OrderOption>
            </Col>;}
          )}
          <Col xs={12}>
            <OrderSummary tripCost={tripCost} options={options} />
          </Col>
        </Row>
      );
    }    
}

export default OrderForm;