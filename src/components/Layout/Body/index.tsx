import React from "react";
import { useState } from "react";
import { CardProps } from "../../../shared/types";
import { MoviesGrid } from "./components/MovieGrid";

interface props {
  category: string;
  type: string;
  movies: CardProps[];
}

export const Body = () => {
  const [categories, setCategories] = useState<props[]>([
    {
      category: "New Releases",
      type: "big",
      movies: [
        {
          to: "movie_info",
          backgroundImage:
            "https://es.web.img3.acsta.net/pictures/14/04/03/11/50/177802.jpg",
        },
        {
          to: "movie_info",
          backgroundImage:
            "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/16cef68ee7d9d816d9f943b2d862a1533da95b4049665ec234e6363ca4863d9b._RI_V_TTW_.jpg",
        },
        {
          to: "movie_info",
          backgroundImage:
            "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2016/11/matrix.jpg?itok=y_D1-7f-",
        },
        {
          to: "movie_info",
          backgroundImage:
            "https://es.web.img3.acsta.net/medias/nmedia/18/67/06/38/20350558.jpg",
        },
        {
          to: "movie_info",
          backgroundImage:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/poster-peliculas-terror-2019-prodigy-1578395572.jpg?crop=1xw:1xh;center,top&resize=480:*",
        },
        {
          to: "movie_info",
          backgroundImage:
            "https://i.pinimg.com/474x/4a/a7/09/4aa709fb827464c325ee3c63f07b8a6c.jpg",
        },
      ],
    },
    {
      category: "What's next",
      type: "normal",
      movies: [
        {
          to: "movie_info",
          backgroundImage:
            "https://www.apollocinemas.nb.ca/uploads/movie/image/1085/the-woman-king-163636.jpg",
        },
        {
          to: "movie_info",
          backgroundImage:
            "https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-15.jpg",
        },
        {
          to: "movie_info",
          backgroundImage:
            "https://image.tmdb.org/t/p/original/qJIggHPX3uil110CjO8ITPpYroH.jpg",
        },
        {
          to: "movie_info",
          backgroundImage:
            "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/92/68/77/PPL_SAlone_Poster_1400x2100_.jpg",
        },
        {
          to: "movie_info",
          backgroundImage:
            "https://es.web.img3.acsta.net/medias/nmedia/18/95/76/36/20426888.jpg",
        },
      ],
    },
  ]);

  return (
    <section>
      {categories.map((data, i) => (
        <MoviesGrid
          category={data.category}
          movies={data.movies}
          type={data.type}
          id={`movies-carousel-${i}`}
          key={i}
        />
      ))}
    </section>
  );
};
