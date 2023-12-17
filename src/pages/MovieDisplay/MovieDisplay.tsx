import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetMovie } from './hooks/useGetMovie';
import { useAddComment } from './hooks/useAddComment';
import { useDeleteMovie } from './hooks/useDeleteMovie';
import { Button } from '../../components/Button/Button';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { Textarea } from '../../components/Textarea/Textarea';

import Style from './MovieDisplay.module.css'

const MovieDisplay = () => {
  const { id } = useParams();


  const [newComment, setNewComment] = useState('');

  const { isLoading, isError, data: movie } = useGetMovie(id);
  const { mutateAsync: addComment, isPending } = useAddComment(id);
  const { mutateAsync: deleteMovie } = useDeleteMovie(id);

  return (
    <div className={Style.movieWrapper}>
      {isLoading || (isPending && <h4>Loading movies</h4>)}
      {isError && <h4>Error, couldnt get the movies</h4>}
      {movie && (
        <div className={Style.movieCardWrapper}>
          <MovieCard
            title={movie.title}
            director={movie.director}
            releaseYear={movie.releaseYear}
            genre={movie.genre}
            rating={movie.rating}
            plotSummary={movie.plotSummary}
            comments={movie.comments}
          />

          <div className={Style.commentsWrapper}>
            <Textarea
              name='comments'
              className={Style.commentTextarea}
              placeholder='Add a comment...'
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button
              onClick={() => {
                addComment(newComment);
                setNewComment('');
              }}
              text='Add Comment'
              styleType='addButton'
            />
          </div>
          <hr />
          <Button onClick={() => deleteMovie()} text='Delete movie' styleType='deleteButton' />
        </div>
      )}
    </div>
  );
};

export default MovieDisplay;
