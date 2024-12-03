import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`${className} max-w-screen-2xl mx-auto  xl:px-0  `}>
      {children}
    </div>
  );
};

export default Container;
