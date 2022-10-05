import React from "react";
import { CarouselComponent, Navbar } from "../../components/Layout";
import { ScreenNames } from "../../shared/types";

export const Home = () => {
  return (
    <section className="app-container">
      <Navbar currentScreen={ScreenNames} />
      <CarouselComponent />
      <main className=""></main>
    </section>
  );
};
