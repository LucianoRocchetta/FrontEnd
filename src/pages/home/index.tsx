import React from "react";
import { CarouselComponent, Navbar, Body } from "../../components/Layout";
import { ScreenNames } from "../../shared/types";

export const Home = () => {
  return (
    <section className="app-container">
      <Navbar currentScreen={ScreenNames} />
      <CarouselComponent />
      <main className="">
        <Body/>
      </main>
    </section>
  );
};
