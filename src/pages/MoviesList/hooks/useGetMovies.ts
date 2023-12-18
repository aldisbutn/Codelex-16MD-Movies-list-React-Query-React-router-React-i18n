import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Movie } from '../MoviesList';

export const useGetMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: () => axios.get<Movie[]>('http://localhost:3000/movies').then((response) => response.data),
  });
};
