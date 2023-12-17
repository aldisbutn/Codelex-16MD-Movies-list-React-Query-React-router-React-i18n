import { Route, Routes } from 'react-router-dom';
import MoviesList from '../pages/MoviesList/MoviesList';
import AboutProject from '../pages/AboutProject/AboutProject';
import MovieDisplay from '../pages/MovieDisplay/MovieDisplay';
import AboutAuthor from '../pages/AboutAuthor/AboutAuthor';
import PageNotFound from '../pages/PageNotFound/PageNotFound';

const RouteProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<AboutProject />} />
      <Route path='/movieslist' element={<MoviesList />} />
      <Route path='/movieslist/:id' element={<MovieDisplay />} />
      <Route path='/author' element={<AboutAuthor />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default RouteProvider;
