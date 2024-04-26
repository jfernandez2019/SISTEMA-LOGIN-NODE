import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../helpers/MovieApi';
import '../styles/movieStyle.css'
import { NavBar } from './NavBar';
export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const allMovies = await fetchMovies();
      const sortedMovies = allMovies.sort((a, b) => b.vote_average - a.vote_average);
      setMovies(sortedMovies);
    };

    getMovies();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className='main-container'>
        {movies.map(movie => (
          <div key={movie.id} className='movie-container'>
            <h3>{movie.title}</h3>
            <p>Puntuación: {movie.vote_average}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </>
  );
};

