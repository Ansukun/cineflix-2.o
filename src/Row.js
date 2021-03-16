import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Details from "./Details";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

// const base_url = "https://image.tmdb.org/t/p/original/";

const Base_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, id }) {
  const [movies, setmovies] = useState([]);
  const [display, setdisplay] = useState(false);
  var [currentMovie, setcurrentMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      console.log(movies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    setcurrentMovie((currentMovie = movie));
    setdisplay(true);
    console.log(currentMovie);
  };

  return (
    <div className="row" id={id}>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${Base_URL}${
              isLargeRow ? movie.poster_path : movie.poster_path
            }`}
            alt={`${movie.title}`}
          ></img>
        ))}
      </div>
      <Details currentMovie={currentMovie} dis={display}></Details>
    </div>
  );
}

export default Row;