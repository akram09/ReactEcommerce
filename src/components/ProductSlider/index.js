import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { cumulativeOffSet } from '../../utils';

export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: props.images[0],
    };
    this.imageRef = React.createRef();
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  handleImageChange(e) {
    const currentX = e.clientX - cumulativeOffSet(this.imageRef.current).left;

    console.dir(this.imageRef.current);

    const part = this.imageRef.current.clientWidth / this.props.images.length;
    console.log(Math.ceil(currentX / part) - 1);

    let imgIndex = Math.ceil(currentX / part) - 1;
    if (imgIndex < 0) {
      imgIndex = 0;
    }

    if (imgIndex >= this.props.images.length) {
      imgIndex = this.props.images.length - 1;
    }
    this.setState({
      img: this.props.images[imgIndex],
    });
  }

  handleMouseOut() {
    this.setState({
      img: this.props.images[0],
    });
  }

  changeImage(i) {
    this.setState({
      img: this.props.images[i],
    });
  }

  render() {
    return (
      <aside className="col-sm-5 border-right">
        <article className="gallery-wrap">
          <div className="img-big-wrap">
            <div style={{ padding: '2rem' }}>
              <a href="">
                <img
                  alt=""
                  onBlur=""
                  ref={this.imageRef}
                  onMouseMove={this.handleImageChange}
                  onMouseOut={this.handleMouseOut}
                  src={this.state.img}
                  style={{ width: '100%', height: '100%' }}
                />
              </a>
            </div>
          </div>
          <div className="img-small-wrap">
            {this.props.images.map((img, i) => (
              <div
                key={i}
                className="item-gallery"
                role="img"
                onClick={() => {
                  this.changeImage(i);
                }}
              >
                <img src={this.state.img} alt="" />
              </div>
            ))}
          </div>
        </article>
      </aside>
    );
  }
}
ProductSlider.propTypes = {
  images: PropTypes.array.isRequired,
};
