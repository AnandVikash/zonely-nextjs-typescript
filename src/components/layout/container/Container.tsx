import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  width?: boolean; // optional prop for controlling max width
}

const Container: React.FC<ContainerProps> = ({ children, className = "", width = true }) => {
  return (
    <div
      className={`mx-auto px-4 ${width ? "max-w-7xl" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
