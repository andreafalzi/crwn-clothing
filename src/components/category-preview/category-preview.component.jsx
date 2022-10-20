import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer } from './category-preview.style';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <span className='title'>
          <Link to={title}>{title.toUpperCase()}</Link>
        </span>
      </h2>
      <div className='preview'>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
