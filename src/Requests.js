const API_KEY = "851360b4078c542ccd16d53db6a1ce1c";


 const requests = {
     
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,


    fetchTrendingTv : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginalsTv: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMoviesTv:`/discover/tv?api_key=${API_KEY}&genre=28`,
    fetchComedyTv : `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorTv: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceTv: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchTv: `/discover/tv?api_key=${API_KEY}&with_genres=99`



    
 };

 export default requests;