import React, { Fragment } from "react";
import { Body } from "../../components/Layout/Body";
import { CarouselComponent } from "../../components/Layout/Carousel";
import { Navbar } from "../../components/Layout/Navbar";
import { ScreenNames } from "../../shared/types";

export const Home = () => {
  return (
    <Fragment>
      <CarouselComponent />
      <Body />
    </Fragment>
  );
};
