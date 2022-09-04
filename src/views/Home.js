
import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";
import MoviesList from "../components/MoviesList";

export function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        MoviesService.get().then(({ data: { results } }) => {
            setMovies(results);
            console.log(results);
        });
    }, []);
    return (
        <div className="App">
            <MoviesList movies={movies} />
        </div>
    );
}