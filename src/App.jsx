// src/App.jsx
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "./App.css";
import Footer from "./components/Footer";

const initialMovies = [
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology.",
    posterURL:
      "https://i.pinimg.com/736x/43/9a/1c/439a1c4583a953c26b63d08a1d832f53.jpg",
    rating: 5,
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    posterURL:
      "https://i.pinimg.com/736x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.jpg",
    rating: 4.5,
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterURL:
      "https://i.pinimg.com/736x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg",
    rating: 4.8,
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    posterURL:
      "https://i.pinimg.com/736x/ea/a2/6e/eaa26e2c3bfa234c3cdd3c4d9fabad35.jpg",
    rating: 4.9,
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
    <div className="App">
      <h1>My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
      <Footer/>

    </div>
  );
};

export default App;
