import * as React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1280px] w-full my-0 mx-auto">{children}</div>;
};

export default Container;
