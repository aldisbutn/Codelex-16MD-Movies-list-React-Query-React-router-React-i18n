import { Link } from 'react-router-dom';
import { useGetMovies } from './hooks/useGetMovies';

import Style from './MoviesList.module.css';

export type Movie = {
  id: number;
  title: string;
  director: string;
  releaseYear: string;
  genre: string;
  rating: string;
  plotSummary: string;
  comments: string[];
};

const MoviesList = () => {
  const { isLoading, isError, data: movies } = useGetMovies();

  return (
    <div className={Style.moviesListWrapper}>
      {isLoading && <h3 className={Style.moviesHeading}>Loading movies</h3>}
      {isError && <h3>Error, couldnt get the movies</h3>}
      {movies && (
        <>
          {movies.map((movie) => (
            <Link key={movie.id} to={`/movieslist/${movie.id}`} className={Style.moviesHeading}>
              <h3>{movie.title}</h3>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default MoviesList;
