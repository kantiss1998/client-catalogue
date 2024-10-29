import MainLayout from "../components/layout/MainLayout";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import NewDropsSection from "../components/NewDropsSection";
import Footer from "../components/Footer";
import Container from "../components/layout/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../api/productSlice";

function HomePage() {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  return (
    <>
      <div className="bg-gray ">
        <MainLayout
          pageTitle="Catalogue Ansania"
          className="flex flex-col gap-10"
        >
          <Container>
            <Header className={"mt-4"} />
            <HeroSection />
          </Container>
          <CategoriesSection />

          <Container>
            <NewDropsSection />
          </Container>
          <Footer />
        </MainLayout>
      </div>
    </>
  );
}

export default HomePage;
