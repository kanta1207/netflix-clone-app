export type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  // tv series have the property "first_air_date" instead of "release_date"
  first_air_date : string;
  title: string;
  // tv series have the property "name" instead of "title"
  name : string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Movies = {
    page :number;
    results : Array<MovieData>;
    total_pages : number;
    total_results : number;
}

