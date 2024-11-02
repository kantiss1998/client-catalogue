import React, { useState } from "react";
import { X } from "lucide-react";

import potoP from "../../assets/products/Lovila1.png"

const ColorPopup = ({ color, onClose, images }) => {
  if (images === "-") {
    images = potoP
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{color.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <img
            src={`${images}`}
            alt={`${color.name} color`}
            className="object-cover rounded"
          />
        </div>
        <p className="text-sm text-gray-600">Hex: {color.hexCode}</p>
      </div>
    </div>
  );
};

const ColorSelector = ({
  color = { name: "Black", hexCode: "#000" },
  isSelected = false,
  shape = "circle",
  images,
  onClick,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const outlineStyle = {
    borderColor: isSelected ? color.hexCode : "transparent",
    cursor: "pointer",
  };
  
  const innerStyle = {
    backgroundColor: color.hexCode,
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setShowPopup(true);
    if (onClick) onClick();
  };

  return (
    <>
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <div className="bg-white absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-800 text-black rounded whitespace-nowrap">
            {color.name}
          </div>
        )}
        <div
          onClick={handleClick}
          className={`w-[48px] h-[48px] ${
            shape === "circle"
              ? "rounded-full"
              : shape === "square"
              ? "rounded-[12px]"
              : ""
          } p-[4px] flex justify-center items-center border-[3px] ${className}`}
          style={outlineStyle}
        >
          <div
            style={innerStyle}
            className={`w-full h-full ${
              shape === "circle"
                ? "rounded-full"
                : shape === "square"
                ? "rounded-[6px]"
                : ""
            } cursor-pointer`}
          />
        </div>
      </div>
      {showPopup && (
        <ColorPopup color={color} images={images} onClose={() => setShowPopup(false)} />
      )}
    </>
  );
};

export default ColorSelector;