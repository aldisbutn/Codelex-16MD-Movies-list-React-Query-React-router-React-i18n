import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Movie } from '../../MoviesList/MoviesList';

export const useAddComment = (id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newComment: string) => {
      const existingMovie = await axios.get<Movie>(`http://localhost:3000/movies/${id}`);
      const updatedMovie: Movie = {
        ...existingMovie.data,
        comments: [...existingMovie.data.comments, newComment],
      };
      return axios.put<Movie>(`http://localhost:3000/movies/${id}`, updatedMovie);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movie', id] });
    },
  });
};
