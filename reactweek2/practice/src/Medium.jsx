import React, { useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "dbf5e371c60a064b5fcf1db7b9f0084c";
const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function Medium() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!query) return;
    const response = await fetch(`${API_URL}${query}`);
    const data = await response.json();
    if (data.results) {
      setMovies(data.results);
    }
  };

  return (
    <div className="medium">
      <h2>Medium Page</h2>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>
      <div className="movie-results">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medium;
