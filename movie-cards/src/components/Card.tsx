import { IMovie } from "../interfaces";

interface ICardProps {
  movie: IMovie
}


const Card: React.FC<ICardProps> = ({ movie }) => {
  return (
    <div className="card">
      <div className="title-rating-wrapper">
        <h3 className="title">{movie.title}</h3>
        <span className="rating">{movie.rating}/5</span>
      </div>
      <div className="genre">
        <span>{movie.genre}</span>
      </div>
      <div className="description-wrapper">
        <p className="description">{movie.description}</p>
      </div>
    </div>
  );
};

export default Card;

