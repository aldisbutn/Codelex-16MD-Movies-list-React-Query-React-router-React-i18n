import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Movie } from '../../MoviesList/MoviesList';
import { z } from 'zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentSchema = z.object({
  username: z
    .string()
    .min(1, 'Please enter a username with at least 1 character')
    .max(20, 'Your username should not exceed 20 characters'),
  comment: z
    .string()
    .min(1, 'Your comment should not be empty; please enter something')
    .max(120, 'Your comment is too long; limit it to 120 characters'),
});

type Comment = z.infer<typeof CommentSchema>;

export const useAddComment = (id: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (comment: Comment) => {
      const existingMovie = await axios.get<Movie>(`http://localhost:3000/movies/${id}`);

      const updatedMovie: Movie = {
        ...existingMovie.data,
        comments: [...(existingMovie.data.comments || []), CommentSchema.parse(comment)],
      };
      return axios.put<Movie>(`http://localhost:3000/movies/${id}`, updatedMovie);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movie', id] });
      return toast.success('Comment added successfully!');
    },
    onError: (error) => {
      if (error instanceof z.ZodError) {
        const errMessages = error.errors.map((message) => toast.error(message.message));
        return errMessages;
      } else {
        return error.message;
      }
    },
  });
};
