import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieList.css';

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`} className="movie-card">
                    <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                    <div className="movie-info">
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieList;
