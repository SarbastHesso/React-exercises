import Card from "../components/Card"
import { IMovie } from "../interfaces";

interface IMoviesListProps{
  movies: IMovie[];
}


const MoviesList: React.FC<IMoviesListProps> = ({movies}) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => {
        return <Card key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MoviesList