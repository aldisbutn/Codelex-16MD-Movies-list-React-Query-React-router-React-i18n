import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  comments: {
    username: string;
    comment: string;
  }[];
};

const MoviesList = () => {
  const { isLoading, isError, data: movies } = useGetMovies();
  const { t } = useTranslation();

  return (
    <div className={Style.moviesListWrapper}>
      {isLoading && <h3>{t('moviesList:messages:loading')}</h3>}
      {isError && <h3>{t('moviesList:messages:error')}</h3>}
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
