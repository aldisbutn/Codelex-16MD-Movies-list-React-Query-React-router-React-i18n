import Style from './MovieCard.module.css';

type MovieCardProps = {
  title: string;
  director: string;
  releaseYear: string;
  genre: string;
  rating: string;
  plotSummary: string;
  comments: string[];
};

export const MovieCard = ({ title, director, releaseYear, genre, rating, plotSummary, comments }: MovieCardProps) => {
  return (
    <>
      <div className={Style.movieInfo}>
        <h4 className={Style.headingSecondary}>Title</h4>
        <h3 className={Style.headingMain}>{title}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>Director</h4>
        <h3 className={Style.headingMain}>{director}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>Release Year</h4>
        <h3 className={Style.headingMain}>{releaseYear}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>Genre</h4>
        <h3 className={Style.headingMain}>{genre}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>Rating</h4>
        <h3 className={Style.headingMain}>{rating}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>Plot Summary</h4>
        <h3 className={Style.headingMain}>{plotSummary}</h3>
        <hr />
        <h4 className={Style.headingSecondary}>Comments</h4>
        <>
          {comments.map((comment) => (
            <>
              <h4 className={Style.headingMain}>{comment}</h4>
            </>
          ))}
        </>
        <hr />
      </div>
    </>
  );
};
