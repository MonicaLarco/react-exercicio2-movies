import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addMovie } from "../actions/AddToPlaylist";
import { MovieContainer } from "../styles/MovieContainer";

const Movie = ({ movieId, movieTitle, overview }) => {
    const dispatcher = useDispatch();

    return (
        <MovieContainer>
            <h3>
                <Link to={`/movie/${movieId}`}>{movieTitle}</Link>
            </h3>
            <p className="movie-overview">{overview}</p>
            <button onClick={() => dispatcher(addMovie({movieTitle}))}>Add to Playlist</button>
        </MovieContainer>

    );
}

export default Movie;

