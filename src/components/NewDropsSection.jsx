import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import Button from "./layout/Button";
import Text from "./layout/Text";

// Images
import DropProductImg1 from "../assets/products/Lovila1.png";
import DropProductImg2 from "../assets/products/Maxel2.png";
import DropProductImg3 from "../assets/products/Shinar Sonic.png";
import DropProductImg4 from "../assets/products/Tierack Jacquard Bunga.png";

// You'll need to import or create these hover images
import DropProductHoverImg1 from "../assets/products/Maxel2.png";
import DropProductHoverImg2 from "../assets/products/Shinar Sonic.png";
import DropProductHoverImg3 from "../assets/products/Tierack Jacquard Bunga.png";
import DropProductHoverImg4 from "../assets/products/Lovila1.png";

const ProductCard = ({ image, hoverImage, name, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={isHovered ? hoverImage : image}
        alt={name}
        className="w-full h-auto max-h-[360px] lg:max-h-[399px] object-cover rounded-xl"
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src={hoverImage}
        alt={`${name} hover`}
        className="w-full h-auto max-h-[360px] lg:max-h-[399px] object-cover absolute top-0 left-0 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="mt-2">
        <Text type="paragraph" className="font-bold">{name}</Text>
        <Text type="paragraph" className="text-gray-600">{color}</Text>
      </div>
    </motion.div>
  );
};

const NewDropsSection = ({ className = "" }) => {
  const navigate = useNavigate();

  const data = [
    {
      image: DropProductImg1,
      hoverImage: DropProductHoverImg1,
      name: "Lovita1",
      color: "Aqua",
    },
    {
      image: DropProductImg2,
      hoverImage: DropProductHoverImg2,
      name: "Maxel2",
      color: "Flower Red",
    },
    {
      image: DropProductImg3,
      hoverImage: DropProductHoverImg3,
      name: "Shinar Sonic",
      color: "Brown Brick",
    },
    {
      image: DropProductImg4,
      hoverImage: DropProductHoverImg4,
      name: "Tierack Jacquard Bunga",
      color: "Light Purple",
    },
  ];

  return (
    <section className={`${className}`}>
      <div className="flex justify-between flex-col items-start sm:flex-row sm:items-end">
        <Text
          type="sectionHeading"
          className="max-w-[68vw] sm:max-w-[50vw] md:max-w-[46vw] lg:max-w-[589px] leading-[95%] text-gray_dark"
        >
          New drops
        </Text>
        <Button
          onClick={() => navigate("/product/all")}
          className="max-w-[190px] mt-6 text-white bg-[#4A90E2]"
        >
          See all catalogue
        </Button>
      </div>
      <div className="mt-8 text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px] xl:gap-[16px]">
        {data.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewDropsSection;