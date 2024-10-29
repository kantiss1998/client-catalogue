import React, { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/layout/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../api/productSlice";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const uniqueProducts = [];
  const seenNames = new Set();
  const { name } = useParams()

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
        if (categoryId !== null && data2.categoryId === categoryId) {
          if (!seenNames.has(data2.name)) {
            seenNames.add(data2.name);
            uniqueProducts.push(data2);
          }
        }
      });
    });

    uniqueProducts.sort((a, b) => a.name.localeCompare(b.name));

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
          <Products productsData={uniqueProducts} />
        </Container>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default ProductPage;
