import React from "react";

const Badge = ({ className = "", type = "default", children }) => {
  const badgeClasses = {
    default: "bg-gray_dark text-white",
    primary: "bg-blue text-white",
    warning: "bg-yellow text-gray_dark",
  };

  const classes = `h-[38px] px-4 flex justify-center items-center text-sm font-medium leading-5 rounded-[12px] w-fit ${badgeClasses[type]} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Badge;
