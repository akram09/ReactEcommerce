import React from 'react';
import PropTypes from 'prop-types';
import { formatMoney } from '../../utils';

const ProductDetail = (props) => {
  const onCart = () => {};
  return (
    <aside className="col-sm-7">
      <article className="card-body p-5">
        <h3 className="title mb-3">{props.product.title}</h3>

        <p className="price-detail-wrap">
          <span className="price h3 text-warning">
            <span className="currency">$</span>
            <span className="num">{formatMoney(props.product.price)}</span>
          </span>
        </p>
        <dl className="item-property">
          <dt>Description</dt>
          <dd>
            <p className="text-capitalize">{props.product.description}</p>
          </dd>
        </dl>
        <dl className="param param-feature">
          <dt>Brand</dt>
          <dd className="text-capitalize">{props.product.brand}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Size</dt>
          <dd>{props.product.size}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Camera</dt>
          <dd>{props.product.camera}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>CPU</dt>
          <dd>{props.product.cpu}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Memory</dt>
          <dd>{props.product.memory}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Display</dt>
          <dd>{props.product.display}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Battery</dt>
          <dd>{props.product.battery}</dd>
        </dl>
        <hr />
        <hr />
        <button
          onClick={onCart}
          type="button"
          className="btn btn-lg btn-outline-primary text-uppercase"
        >
          <i className="fa fa-shopping-cart" /> Add to cart
        </button>
      </article>
    </aside>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetail;
