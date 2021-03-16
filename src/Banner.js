import {React,useState,useEffect} from 'react'
import axios from "./axios"
import requests from "./Requests"
import "./Banner.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Banner() {

    const [movie,setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    if (trailerUrl)
    {
         setTrailerUrl('');
    } 
    else {
      console.log(movie.name);
      movieTrailer(movie?.title || movie?.name || movie?.source)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
          console.log("the url for the trailer is " + trailerUrl);
        })
        .catch((error) => console.log(error));


      console.log(trailerUrl);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 2,
    },
  };



    useEffect(() => {
         async function fetchData(){
             const request =await axios.get(requests.fetchNetflixOriginals);
             setMovie(
                 request.data.results[
                     Math.floor(Math.random()* request.data.results.length-1)
                 ]
             )
             return request;
         }
        fetchData();
    }, [])

    console.log(movie);


    function truncate (string,n) {

        return string?.length > n?string.substr(0,n-1)+"...":string;


    }

    return (
        <header className = "banner" style = {{
            backgroundSize : "cover",
            backgroundPosition : "center center",
            backgroundImage :  `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            
            
        }}>
        <div className = "banner__contents">
            <h1 className = "banner__title">
                 {movie?.title||movie?.name||movie?.original_name}</h1>
            <div className = "banner__buttons">
                <button   onClick={() => handleClick(movie)}  className = "banner__button">play</button>
                <button className = "banner__button">my lisyts</button>
                </div>
                <h1 className = "banner__description">
                {truncate(movie?.overview, 150)}
                </h1>
                <div className="row_video_player">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
            </div>

            
            <div className = "banner--bottom"/>
           
        </header>
    )
}

export default Banner