import axios from 'axios';
import { Movie } from '../../MoviesList/MoviesList';
import { useQuery } from '@tanstack/react-query';

export const useGetMovie = (id: string | undefined) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () => axios.get<Movie>(`http://localhost:3000/movies/${id}`).then((response) => response.data),
  });
};
