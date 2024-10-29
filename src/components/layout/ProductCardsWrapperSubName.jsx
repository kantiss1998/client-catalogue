import React from "react";
import ProductCardSubName from "../ProductCardSubName";


const ProductCardsWrapperSubName = ({
  productsData,
  className = "",
  productImageClassName = "",
}) => {
  return (
    <div className={`${className} grid`}>
      {productsData?.map((d, i) => (
        <ProductCardSubName
          image={d.image}
          imageClassName={productImageClassName}
          subName={d.subName}
          name={d.name}
          color={d.color}
          id={d.id}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProductCardsWrapperSubName;
