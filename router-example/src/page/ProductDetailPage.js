import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetailPage = () => {
  const { id } = useParams();

  return <div>Show Product Detail {id}</div>;
};

export default ProductDetailPage;
