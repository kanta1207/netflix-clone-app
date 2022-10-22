const key = "0af8c53a93a70c59e150165ee668879f";

const movieDataRequests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>`
};
const requestMovieDetails = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=<<api_key>>&language=en-US` 

const requestSimillarMovies  = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=<<api_key>>&language=en-US&page=1`

export {movieDataRequests,requestMovieDetails,requestSimillarMovies}