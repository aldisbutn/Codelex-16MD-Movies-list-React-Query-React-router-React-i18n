import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'react-toastify/dist/ReactToastify.css';

import { useGetMovie } from './hooks/useGetMovie';
import { useAddComment } from './hooks/useAddComment';
import { useDeleteMovie } from './hooks/useDeleteMovie';

import { Button } from '../../components/Button/Button';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { Textarea } from '../../components/Textarea/Textarea';

import Style from './MovieDisplay.module.css';

const MovieDisplay = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const [username, setUserName] = useState('');
  const [comment, setComment] = useState('');

  const { isLoading, isError, data: movie } = useGetMovie(id);
  const { mutateAsync: addComment, isPending } = useAddComment(id);
  const { mutateAsync: deleteMovie } = useDeleteMovie(id);

  const newComment = {
    username: username,
    comment: comment,
  };

  return (
    <>
      <div className={Style.movieWrapper}>
        {isLoading || (isPending && <h4>{t('movieDisplay:messages:loading')}</h4>)}
        {isError && <h4>{t('movieDisplay:messages:error')}</h4>}
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
                name='username'
                className={Style.usernameTextarea}
                placeholder={t('movieDisplay:textArea:username')}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Textarea
                name='comments'
                className={Style.commentTextarea}
                placeholder={t('movieDisplay:textArea:comment')}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                onClick={() => {
                  addComment(newComment);
                  setComment('');
                  setUserName('');
                }}
                text={t('buttons:headings:add')}
                styleType='addButton'
              />
            </div>
            <hr />
            <Button onClick={() => deleteMovie()} text={t('buttons:headings:delete')} styleType='deleteButton' />
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDisplay;
