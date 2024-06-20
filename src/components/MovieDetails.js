import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/MovieDetails.css';

const API_KEY = '2c5e0a40';

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);

    const fetchMovieDetails = async () => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
            setMovie(response.data);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-details">
            <button className="back-button" onClick={() => navigate(-1)}>Back</button>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} className="movie-details-poster" />
            <div className="movie-details-info">
                <h2>{movie.Title}</h2>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <p><strong>Ratings:</strong> {movie.imdbRating}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
