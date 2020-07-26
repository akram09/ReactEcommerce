import React, { Component } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './index.scss';
import { ORDER_BY_ASC, ORDER_BY_DESC, NO_ORDER } from '../../context/actions';
import AppContext from '../../context';
export default class OrderFilter extends Component {
  constructor() {
    super();
    this.state = {
      selected: '',
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  handleRadioChange(e) {
    this.setState({
      selected: e.target.value,
    });
    this.context.filterOrder(e.target.value);
  }

  removeFilter() {
    const buttons = document.getElementsByName('orderByPrice');
    buttons.forEach((e1) => {
      const element = e1;
      element.checked = false;
    });
    this.setState({ selected: '' });
    this.context.filterOrder(NO_ORDER);
  }

  render() {
    return (
      <Card>
        <Card.Header>
          <div className="filter-header">
            {console.log(this.context)}
            <h2 className="filter-header__text">Price</h2>
            {this.state.selected && (
              <AiOutlineCloseCircle
                onClick={this.removeFilter}
                className="filter-header__icon"
                size={28}
              />
            )}
          </div>
        </Card.Header>
        <ListGroup>
          <ListGroupItem>
            <label className="custom-radio-btn" htmlFor="checkbox_order_asc">
              Order By ASC
              <input
                value={ORDER_BY_ASC}
                onChange={this.handleRadioChange}
                type="radio"
                name="orderByPrice"
                className="custom-radio-btn__input"
                id="checkbox_order_asc"
              />
              <span className="custom-radio-btn__span" />
            </label>
          </ListGroupItem>
          <ListGroupItem>
            <label className="custom-radio-btn" htmlFor="checkbox_order_desc">
              Order By DESC
              <input
                value={ORDER_BY_DESC}
                onChange={this.handleRadioChange}
                type="radio"
                name="orderByPrice"
                className="custom-radio-btn__input"
                id="checkbox_order_desc"
              />
              <span className="custom-radio-btn__span" />
            </label>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}
OrderFilter.contextType = AppContext;
