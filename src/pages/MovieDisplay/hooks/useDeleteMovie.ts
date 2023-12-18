import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../../MoviesList/MoviesList';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useDeleteMovie = (id: string | undefined) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      await axios.delete<Movie>(`http://localhost:3000/movies/${id}`);
    },
    onSuccess: () => {
      navigate('/movieslist');
      toast.success('Movie deleted successfully!');
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });
};



