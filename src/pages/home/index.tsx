import React, { Fragment } from "react";
import { Body } from "../../components/Layout/Body";
import { CarouselComponent } from "../../components/Layout/Carousel";

export const Home = () => {
  return (
    <Fragment>
      <CarouselComponent />
      <Body />
    </Fragment>
  );
};
