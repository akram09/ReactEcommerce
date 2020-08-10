import React, { useContext } from 'react';
import AppContext from '../../context';
import ProductSlider from '../../components/ProductSlider';
import ProductDetail from '../../components/ProductDetail';

const ProductDetails = (props) => {
  const context = useContext(AppContext);
  return (
    <div className="container" style={{ padding: '6rem 0' }}>
      <div className="card">
        <div className="row">
          <ProductSlider images={getProduct(context, props).images} />
          <ProductDetail product={getProduct(context, props)} />
        </div>
      </div>
    </div>
  );
};

const getProduct = (context, props) => {
  const product = context.products.find(
    (pr) => pr.id === +props.match.params.id,
  );

  return product;
};

export default ProductDetails;
