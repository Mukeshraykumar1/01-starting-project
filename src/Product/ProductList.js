import React from 'react';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

function ProductList() {
  return (
    <div>
      {productsArr.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { title, price, imageUrl } = product;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
}

export default ProductList;
