// src/components/MovieModal.js
import React from "react";
import Modal from "react-modal";
import "../css/MovieModel.css";

const MovieModal = ({ movie, isOpen, onRequestClose }) => {
  if (!movie) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="movie-modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <img
          src={movie.Poster}
          alt={`${movie.Title} Poster`}
          className="modal-poster"
        />
        <div className="modal-info">
          <h2>{movie.Title}</h2>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Ratings:</strong> {movie.imdbRating}
          </p>
          <button onClick={onRequestClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MovieModal;
