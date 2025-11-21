import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = () => {
  //state variable - type useState and press tab
  //do this after fetching the data
  //now write use state Snippets, movies, and set movies.
  const [movies, setMovies] = useState([]);

  //type ueEffect and tab to add the import
  //useEffect(()=>{})
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=599e5131cc74cb82adca936c16fe62fc"
    );
    const data = await response.json();
    console.log(data);
    setMovies(data.results);
  };

  return (
    <div className="movie_cards">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
