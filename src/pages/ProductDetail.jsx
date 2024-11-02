import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Container from "../components/layout/Container";
import Header from "../components/Header";
import ImageGallery from "../components/layout/ImageGalery";
import DetailView from "../components/DetailView";
import Footer from "../components/Footer";
import { fetchProducts } from "../api/productSlice";

import tes1 from "../assets/products/Lovila1.png";
import tes2 from "../assets/products/Maxel2.png";
import tes3 from "../assets/products/Shinar Sonic.png";
import tes4 from "../assets/products/Tierack Jacquard Bunga.png";

const ProductDetail = () => {
  let images = [tes1, tes2, tes3, tes4];
  const colorVarients = [];
  const uniqueProducts = [];
  const { id } = useParams();
  const imagesfilter = ['-', '-', '-', '-'];

  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);

  products &&
    products.forEach((data) => {
      data.Products.forEach((data2) => {
        if (data2.id == id) {
          uniqueProducts.push(data2);
          if (data2.imgUrls != imagesfilter) {
            images = data2.imgUrls;
          }
          data2.Colors.forEach((data3) => {
            colorVarients.push(data3);
          });
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
    <div className="bg-gray min-h-screen flex flex-col">
      <MainLayout pageTitle="Ansania Hijab" className="flex flex-col flex-grow">
        <Container className="flex-grow flex flex-col mb-10">
          <Header className="m-4" />
          <section className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8 flex-grow">
            <div className="w-full md:w-1/2 lg:w-3/5">
              <ImageGallery
                galleryImages={images}
                productName="My product name"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5">
              <DetailView
                productName={`${uniqueProducts[0]?.name} ${uniqueProducts[0]?.subName}`}
                colorVarients={colorVarients}
                about={
                  <span>
                    Shadow Navy / Army Green
                    <br />
                    <br />
                    This product is excluded from all promotional discounts and
                    offers.
                  </span>
                }
              />
            </div>
          </section>
        </Container>
        <Footer />
      </MainLayout>
    </div>
  );
};

export default ProductDetail;
