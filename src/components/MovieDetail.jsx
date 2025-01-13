import { Link, useParams } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-detail p-4">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} className="mb-4" />
      <p className="mb-4">{movie.description}</p>
      <iframe
        src={movie.trailerLink}
        title={movie.title}
        className="w-full h-64 mb-4"
        allowFullScreen
      ></iframe>
      <Link to="/" className="text-blue-500">
        Back to Home
      </Link>
    </div>
  );
};

export default MovieDetail;
