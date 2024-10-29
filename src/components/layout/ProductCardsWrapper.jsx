import React from "react";
import ProductCard from "../ProductCard";

const ProductCardsWrapper = ({
  productsData,
  className = "",
  productImageClassName = "",
}) => {
  console.log(productsData);
  return (
    <div className={`${className} grid`}>
      {productsData?.map((d, i) => (
          <ProductCard
            image={d.image}
            imageClassName={productImageClassName}
            subName={d.name}
            name={d.name}
            color={d.color}
            key={i}
          />
      ))}
    </div>
  );
};

export default ProductCardsWrapper;
