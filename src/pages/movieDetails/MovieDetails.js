import { useParams } from "react-router-dom";
import { MovieImage } from "../../components/MovieImage/MovieImage";
import styles from "./MovieDetails.module.css";
import { useGetMovieDetail } from "../../hooks/useGetMovieDetail";

export function MovieDetails() {
    const { movieId } = useParams();
    const movie = useGetMovieDetail(movieId)

    return (
        <article className={styles.movie}>
            <MovieImage path={movie.poster_path} size={500} />

            <div className={styles.movieInfo}>
                <h1>{movie.title}</h1>

                <div className={styles.movieDescription}>
                    {movie.overview}
                </div>
            </div>

        </article>
    )
}