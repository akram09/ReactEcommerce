import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './index.scss';
export default class OrderFilter extends Component {
  constructor(props) {
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
  }
  removeFilter(e) {}

  render() {
    return (
      <Card>
        <Card.Header>
          <h3>Price</h3>
        </Card.Header>
        <ListGroup>
          <ListGroupItem>
            <label className="custom-radio-btn" htmlFor="checkbox_order_asc">
              Order By ASC
              <input
                value={ORDER_BY_ASC}
                onChange={this.handleRadioChange}
                type="radio"
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
const ORDER_BY_ASC = 'order_asc';
const ORDER_BY_DESC = 'order_des';
