import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../MoviesList/MoviesList';

export const useDeleteMovie = (id: string | undefined) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      await axios.delete<Movie>(`http://localhost:3000/movies/${id}`);
    },
    onSuccess: () => {
      navigate('/movieslist');
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });
};
