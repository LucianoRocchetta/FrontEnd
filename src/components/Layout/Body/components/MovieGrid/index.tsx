import { useState } from "react";
import { Card } from "../../../../common";
import { MoviesGridProps } from "../../../../../shared/types";

export const MoviesGrid = ({ category, images, type }: MoviesGridProps) => {
  const [movies, setMovies] = useState(images);
  return (
    <div className={`movies-grid ${type}`}>
      <h2>{category}</h2>
      <div className="grid-container">
        {movies.map((movie, i) => (
          <Card to="" img={movie} key={i} />
        ))}
      </div>
    </div>
  );
};
