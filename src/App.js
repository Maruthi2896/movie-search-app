import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css';

const API_KEY = '2c5e0a40';

const App = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (query) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
            if (response.data.Search) {
                setMovies(response.data.Search);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const fetchPopularMovies = async () => {
        const popularMovies = ['tt0111161', 'tt0068646', 'tt0071562', 'tt0468569', 'tt0050083']; // Example IMDb IDs
        try {
            const moviePromises = popularMovies.map((id) =>
                axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
            );
            const movieResponses = await Promise.all(moviePromises);
            setMovies(movieResponses.map((response) => response.data));
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    };

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    const location = useLocation();
    const isDetailsPage = location.pathname.startsWith('/movie/');

    return (
        <div>
            <h1>Movie Search App</h1>
            {!isDetailsPage && <SearchBar onSearch={fetchMovies} />}
            <Routes>
                <Route path="/" element={<MovieList movies={movies} />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
