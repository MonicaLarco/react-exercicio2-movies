import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";
import { useParams } from 'react-router-dom';

export function MovieDetail() {
    const [movie, setMovie] = useState([]);
    let { movieId } = useParams();

    useEffect(() => {
        MoviesService.getById(movieId).then(({ data }) => {
            setMovie(data);
            console.log(data);
        });
    }, []);
    return (
    <section>
        <h1>{ movie.title }</h1>
        <section>
            <p>{ movie.overview }</p>
        </section>
    </section>)
}