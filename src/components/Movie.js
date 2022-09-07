import React from "react";
import { Link } from "react-router-dom";
import { MovieContainer } from "../styles/MovieContainer";

const Movie = ({ movieId, movieTitle, overview }) => {


    return (
        <MovieContainer>
            <h3>
                <Link to={`/movie/${movieId}`}>{movieTitle}</Link>
            </h3>
            <p className="movie-overview">{overview}</p>
        </MovieContainer>

    );
}

export default Movie;

