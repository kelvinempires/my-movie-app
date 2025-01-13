import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

const initialMovies = [
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology.",
    posterURL:
      "https://i.pinimg.com/736x/43/9a/1c/439a1c4583a953c26b63d08a1d832f53.jpg",
    rating: 5,
    trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    posterURL:
      "https://i.pinimg.com/736x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.jpg",
    rating: 4.5,
    trailerLink: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterURL:
      "https://i.pinimg.com/736x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg",
    rating: 4.8,
    trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    posterURL:
      "https://i.pinimg.com/736x/ea/a2/6e/eaa26e2c3bfa234c3cdd3c4d9fabad35.jpg",
    rating: 4.9,
    trailerLink: "https://www.youtube.com/embed/EXeTwQWrcwY",
  },
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
    );
  });

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Filter
                  filterTitle={filterTitle}
                  setFilterTitle={setFilterTitle}
                  filterRating={filterRating}
                  setFilterRating={setFilterRating}
                />
                <AddMovie addMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </div>
            }
          />
          <Route
            path="/movies/:title"
            element={<MovieDetail movies={movies} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
