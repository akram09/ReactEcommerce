import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.scss';
import { cumulativeOffSet, formatMoney } from '../../utils';
import SlideDots from '../SlideDots';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.product.images[0],
      activeItem: 0,
    };
    this.imageRef = React.createRef();
  }

  handleImageChange(e) {
    let clientX;

    if (e.type === 'touchmove') {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const currentX = clientX - cumulativeOffSet(this.imageRef.current).left;

    // console.dir(imageRef.current);

    const part =
      this.imageRef.current.clientWidth / this.props.product.images.length;
    // console.log(Math.ceil(currentX / part) - 1);

    let imgIndex = Math.ceil(currentX / part) - 1;
    if (imgIndex < 0) {
      imgIndex = 0;
    }

    if (imgIndex >= this.props.product.images.length) {
      imgIndex = this.props.product.images.length - 1;
    }
    this.setState({
      img: this.props.product.images[imgIndex],
      activeItem: imgIndex,
    });
  }

  handleMouseOut() {
    this.setState({
      img: this.props.product.images[0],
      activeItem: 0,
    });
  }

  changeImage(i) {
    this.setState({
      img: this.props.product.images[i],
      activeItem: i,
    });
  }

  render() {
    return (
      <Card className="product">
        <Link
          to={`/product/${this.props.product.id}`}
          className="product__link"
        >
          <Card.Image
            variant="top"
            className="product__img"
            onMouseMove={this.handleImageChange}
            onMouseOut={this.handleMouseOut}
            onTouchMove={this.handleImageChange}
            onTouchEnd={this.handleMouseOut}
            src={this.state.img}
            alt={this.props.product.title}
            ref={this.imageRef}
          />
          <SlideDots
            len={this.props.product.images.length}
            activeItem={this.state.activeItem}
            changeItem={this.changeImage}
          />
        </Link>
        <Card.Body className="product__text">
          <h4 className="card-title product__title">
            <Link to={`/products/${this.props.product.id}`}>
              {this.props.product.title}
            </Link>
          </h4>
          <h5 className="product__price">
            ${formatMoney(this.props.product.price)}
          </h5>
          <p className="card-text product__description">
            {this.props.product.description}
          </p>
          <Button
            variant="info"
            onClick={() => {
              console.log('clickedddd');
            }}
            className="product__add-to-cart"
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
Product.propTypes = {
  product: PropTypes.object.isRequired,
};
