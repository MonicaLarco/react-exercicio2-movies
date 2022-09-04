import React from "react";
// import { MoviesService } from "../api/MoviesService";
import Movie from "./Movie";

const MoviesList = ({ movies }) => {
    return (
        <div className="container">
            <div>
                {movies.map(movie => <Movie movieId={movie.id} movieTitle={movie.title} overview={movie.overview}/>)}
            </div>
        </div>
    )
}

export default MoviesList;



