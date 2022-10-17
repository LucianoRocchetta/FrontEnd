import React from "react";
import { MoviesGridProps } from "../../../../../shared/types";
import { CardsCarousel } from "../../../../common/CardsCarousel";

export const MoviesGrid = ({ category, movies, type }: MoviesGridProps) => {
  return (
    <div className={`movies-grid ${type}`}>
      <h2>{category}</h2>
      <CardsCarousel cards={movies} />
    </div>
  );
};
