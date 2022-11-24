import React from "react";
import { LayoutProps } from "../../shared/types";
import { Navbar } from "./Navbar";

export const Layout = (props: LayoutProps) => {
  return (
    <div className="app-container">
      <Navbar />
      <main>{props.children}</main>
    </div>
  );
};
