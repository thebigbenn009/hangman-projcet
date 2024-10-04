import React, { ReactNode } from "react";
interface BackgroundWrapperProps {
  children: ReactNode;
}
const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return <section className="background-wrapper">{children}</section>;
};

export default BackgroundWrapper;
