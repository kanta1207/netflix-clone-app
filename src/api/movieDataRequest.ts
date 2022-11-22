const key = "0af8c53a93a70c59e150165ee668879f";

const baseUrl = "https://api.themoviedb.org/3";

export const requests = {
  requestPopularMovies: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestTopRatedMovies: `${baseUrl}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `${baseUrl}/trending/all/day?api_key=${key}`,
  requestPopularSeries: `${baseUrl}/tv/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRatedSeries: `${baseUrl}/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  requestActionMovies: `${baseUrl}/discover/movie?api_key=${key}&with_genres=28`,
  requestComedyMovies: `${baseUrl}/discover/movie?api_key=${key}&with_genres=35`,
  requestHorrorMovies: `${baseUrl}/discover/movie?api_key=${key}&with_genres=27`,
  requestRomanceMovies: `${baseUrl}/discover/movie?api_key=${key}&with_genres=10749`,
  requestDocumentSeries: `${baseUrl}/discover/tv?api_key=${key}&with_genres=99`,
  requestNetflixOriginals: `${baseUrl}/discover/tv?api_key=${key}&with_networks=213`
};


type Api = {
  title : string;
  isSeries : boolean;
  endPoint : string;
}

// https://api.themoviedb.org/33/movie/238/similar?api_key=0af8c53a93a70c59e150165ee668879f&language=en-US&page=1
// https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1

export const apiArr: Array<Api> = [
  { title: "Trending Now",isSeries : true, endPoint: requests.requestTrending },
  {title: "Only on Netlfix", isSeries : true, endPoint: requests.requestNetflixOriginals},
  { title: "Popular on Netflix", isSeries : false ,endPoint: requests.requestPopularMovies },
  { title: "Top Rated Movies", isSeries : false, endPoint: requests.requestTopRatedMovies },
  { title: "Popular Series", isSeries : true, endPoint: requests.requestPopularSeries },
  { title: "Top Rated Series", isSeries : true, endPoint: requests.requestTopRatedSeries },
  { title: "Actions", isSeries : false, endPoint: requests.requestActionMovies },
  { title: "Comedies", isSeries : false, endPoint: requests.requestComedyMovies },
  { title: "Horrors", isSeries : false, endPoint: requests.requestHorrorMovies },
  { title: "Romances", isSeries : false, endPoint: requests.requestRomanceMovies},
  {title : "Documentaries", isSeries : true, endPoint: requests.requestDocumentSeries}
];

export const requestMovieDetails = (movieId: number | undefined = 1) =>
  `${baseUrl}/movie/${movieId}?requestskey=${key}&language=en-US`;

export const requestYouMightLikes = (id : number | undefined) =>
  `${baseUrl}/movie/${id}/similar?api_key=${key}&language=en-US&page=1`;

  // ${baseUrl}/movie/916605/similar?api_key=0af8c53a93a70c59e150165ee668879f&language=en-US&page=1
