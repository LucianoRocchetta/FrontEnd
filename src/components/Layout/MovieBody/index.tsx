import { useState } from "react";
import { GenericButton } from "../../common";
import { MovieInfoCard } from "./components";

export const MovieBody = () => {
  const [movieInfo, setMovieInfo] = useState({
    movieId: "123",
    type: "movie",
    movieCover: "https://i.blogs.es/f929a4/toy-story-4-estreno/840_560.jpg",
    movieLogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Toy_Story.svg/1200px-Toy_Story.svg.png",
    movieParameters: ["+16", "4K", "Animation", "Disney"],
    movieDescription:
      "El vaquero se encuentra con el astronauta y juntos cabalgan por la vida, hasta que el oloroso pete los secuestra",
    movieImages: [
      "https://images.ecestaticos.com/E49k-X0PVGC4fyLkaCGAEeW2Dvs=/0x0:1596x896/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F942%2F0d7%2F02b%2F9420d702bc8a2595d0c4d427426bc27a.jpg",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/toy-story-4-characters-1561289306.jpg",
      "https://media.npr.org/assets/artslife/movies/2010/06/toy-story-3/buzz_wide-239cf22207f8030791b1976ca1d7e1b46dbb391d-s1100-c50.jpg",
    ],
  });

  return (
    <div className="movie-body">
      <div className="movie-cover d-flex">
        <img src={movieInfo.movieCover} alt={movieInfo.movieCover} />
        <img
          className="movie-cover-logo"
          src={movieInfo.movieLogo}
          alt={movieInfo.movieLogo}
        />
      </div>

      <div className="d-flex align-center movie-params">
        {movieInfo.movieParameters.map((param, i) => (
          <span key={i}>{param}</span>
        ))}
      </div>

      <div className="controls d-flex align-center">
        <GenericButton preset="play_button" onClick={() => {}}/>
        <GenericButton preset="add_button" onClick={() => {}}/>
      </div>

      <p>{movieInfo.movieDescription}</p>

      {movieInfo.type == "movie" ? (
        <div className="movie-images">
          {movieInfo.movieImages.map((image, i) => (
            <MovieInfoCard key = {i} to = {''} backgroundImage = {image} />
          ))}
        </div>
      ) : (
        <h2>Episodios</h2>
      )}
    </div>
  );
};
