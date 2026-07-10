import React from 'react';
import ProductCompare from './product_compare/ProductCompare';
import floor_heating from './../../../assets/product_compare.webp';
import './styles.css';


const ProductBenefits = ({ isMobile }) => {

  return (
    <div className='benefits_showcase_container'>
      <h2 className='benefits_showcase_banner banner'>
        Why Choose Our Products?
      </h2>
      <h3 className='subheader benefits_subheader'>
        Compared with Nationwide Competitors
      </h3>
      <img
        src={floor_heating}
        alt='floor_heating'
        id='product_compare_diagram'
      />
      <div className='compare_container'>
        <ProductCompare />
      </div>
    </div>
  );
};

export default ProductBenefits;
