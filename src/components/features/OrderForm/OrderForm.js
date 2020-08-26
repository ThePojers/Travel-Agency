import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import {Row, Col} from 'react-flexbox-grid';
import  Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, code, country, idCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    code,
    country,
    idCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

class OrderForm extends React.Component {

    static propTypes = {
      tripCost: PropTypes.string.isRequired,
      options: PropTypes.object,
      pricing: PropTypes.array,
      setOrderOption: PropTypes.func,
      code: PropTypes.string,
      country: PropTypes.string,
      id: PropTypes.string,
    }

    render() {
      const { tripCost, options, setOrderOption, code, country, id} = this.props;
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
          <Button  onClick={ () => options.name == '' || options.contact == '' ?  '' :  sendOrder(options, tripCost, code, country, id)}>Order now!</Button>
        </Row>
              
        
      );
    }    
}

export default OrderForm;