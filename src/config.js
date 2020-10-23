const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const endpoints =  {
    Trending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    TopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    Actionmovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    ComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    HorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    RomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    Mystery : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    Scifi : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    Westren : `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    Animation : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    Tv : `/discover/movie?api_key=${API_KEY}&with_genres=10770`
};


export const baseurls = {
    api: "https://api.themoviedb.org/3",
    images: "https://image.tmdb.org/t/p/original/"
};