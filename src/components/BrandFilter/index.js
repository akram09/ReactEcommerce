import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import AppConsumer from '../../context/consumer';

function BrandFilter() {
  return (
    <Card>
      <Card.Header>
        <h3>Brands</h3>
      </Card.Header>
      <ListGroup>
        <AppConsumer>
          {(context) => {
            const brandsWithCount = mapBrandsToNumbers(context.products);
            return context.brands.map((brand) => (
              <ListGroupItem>
                <label
                  className="custom-checkbox text-capitalize"
                  htmlFor={`checkbox-${brand}`}
                >
                  {brand} ({brandsWithCount[brand]})
                  <input
                    type="checkbox"
                    id={`checkbox-${brand}`}
                    name={brand}
                    className="custom-checkbox__input"
                    // onInput={handleSelectBox}
                  />
                  <span className="custom-checkbox__span"></span>
                </label>
              </ListGroupItem>
            ));
          }}
        </AppConsumer>
      </ListGroup>
    </Card>
  );
}

const mapBrandsToNumbers = (products) => {
  const brandsWithCount = {};
  products.forEach((product) => {
    brandsWithCount[product.brand] = brandsWithCount[product.brand] + 1 || 1;
  });
  return brandsWithCount;
};

export default BrandFilter;
