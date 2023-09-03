import { Link } from "react-router-dom";
import { MovieImage } from "../MovieImage/MovieImage";
import styles from "./MovieItem.module.css";
import { format } from 'date-fns';
import React from "react";

export function MovieItem({ movie }) {
    // Verifique se movie.release_date é uma data válida antes de formatá-la
    const releaseDate = new Date(movie.release_date);
    const isValidDate = !isNaN(releaseDate.getTime()); // Verifica se a data é válida

    let formattedDate = "Data de lançamento desconhecida";
    if (isValidDate) {
        formattedDate = format(releaseDate, "dd/MM/yyyy");
    }

    return (
        <div className={styles.movie} >
            <h3>{movie.title}</h3>

            <MovieImage path={movie.poster_path} />

            <div className={styles.movieInfo}>
                <div>
                    <strong>
                        Data de lançamento:
                    </strong>
                    {formattedDate}
                </div>
            </div>
            <div className={styles.movieFooter}>
                <Link to={`/movie/${movie.id}`}> Ver detalhes</Link>
            </div>
        </div>
    )
}