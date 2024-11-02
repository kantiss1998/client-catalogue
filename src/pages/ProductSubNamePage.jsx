import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/layout/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../api/productSlice";
import ProductsSubName from "../components/ProductsSubName";
import { useParams } from "react-router-dom";

const ProductSubNamePage = () => {
  const uniqueProducts = [];
  const { name, subname } = useParams();

  let categoryId = null;
  if (name === "polos") {
    categoryId = 2;
  } else if (name === "motif") {
    categoryId = 1;
  }

  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  products &&
    products.forEach((data) => {
      data.Products.forEach((data2) => {
        if (categoryId !== null && data2.categoryId == categoryId) {
          if (data2.name == subname) {
            uniqueProducts.push(data2);
          }
        }
      });
    });
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  return (
    <div className="bg-gray ">
      <MainLayout pageTitle="Ansania Hijab" className="flex flex-col gap-10">
        <Container>
          <Header className={"m-4"} />
          <ProductsSubName productsData={uniqueProducts} />
        </Container>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default ProductSubNamePage;
