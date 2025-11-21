import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="Movie Poster"
      />
      <div className="movie-details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
        </div>
        <p className="movie-description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
