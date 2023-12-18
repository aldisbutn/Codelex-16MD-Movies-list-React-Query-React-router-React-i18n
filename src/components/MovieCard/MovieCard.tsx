import { useTranslation } from 'react-i18next';

import Style from './MovieCard.module.css';

type MovieCardProps = {
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

export const MovieCard = ({ title, director, releaseYear, genre, rating, plotSummary, comments }: MovieCardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={Style.movieInfo}>
        <h4 className={Style.headingSecondary}>{t('movieCard:headings:title')}</h4>
        <h3 className={Style.headingMain}>{title}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>{t('movieCard:headings:director')}</h4>
        <h3 className={Style.headingMain}>{director}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>{t('movieCard:headings:releaseYear')}</h4>
        <h3 className={Style.headingMain}>{releaseYear}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>{t('movieCard:headings:genre')}</h4>
        <h3 className={Style.headingMain}>{genre}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>{t('movieCard:headings:rating')}</h4>
        <h3 className={Style.headingMain}>{rating}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>{t('movieCard:headings:plotSummary')}</h4>
        <h3 className={Style.headingMain}>{plotSummary}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>{t('movieCard:headings:comments')}</h4>
        <div className={Style.commentsWrapper}>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className={Style.commentWrapper}>
                <h3 className={Style.headingUsername}>{comment.username}</h3>
                <p className={Style.paragraphComment}>{comment.comment}</p>
              </div>
            ))
          ) : (
            <p>{t('movieCard:headings:noComments')}</p>
          )}
        </div>
        <hr />
      </div>
    </>
  );
};
