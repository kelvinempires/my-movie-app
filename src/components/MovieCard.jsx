import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <Link to={`/movies/${movie.title}`}>
        <img className="w-full" src={movie.posterURL} alt={movie.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie.title}</div>
          <p className="text-gray-700 text-base">{movie.description}</p>
          <p className="text-gray-900 font-bold mt-2">Rating: {movie.rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
