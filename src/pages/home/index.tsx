import React from "react";
import { Jumbotron, Navbar } from "../../components/Layout";
import { ScreenNames } from "../../shared/types";

export const Home = () => {
  return (
    <section className="app-container">
      <Navbar currentScreen={ScreenNames.HOME} />
      <Jumbotron />
      <main className=""></main>
    </section>
  );
};
