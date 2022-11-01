const key = "0af8c53a93a70c59e150165ee668879f";

export const movieDataRequests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
};

export  const tvShowDataRequests = {
  requestPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=2`,
  requestTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=1`,
};

export const apiArr = [
  { title: "Trending Now", endPoint: movieDataRequests.requestTrending },
  { title: "Popular Movies", endPoint: movieDataRequests.requestPopular },
  { title: "Top Rated Movies", endPoint: movieDataRequests.requestTopRated },
  { title: "Popular Series", endPoint: tvShowDataRequests.requestPopular },
  { title: "Top Rated Series", endPoint: tvShowDataRequests.requestTopRated },
];

export const requestMovieDetails = (movieId : number) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`;

export const requestSimillarMovies = (movieId : number) =>
  `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${key}&language=en-US&page=1`;
