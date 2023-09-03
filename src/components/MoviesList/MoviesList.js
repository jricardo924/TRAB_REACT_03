import { MovieItem } from "../MovieItem/MovieItem";
import Style from "./MoviesList.module.css";


export function MoviesList({ movies }) {
    return (
        <section className={Style.movies}>
            {movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}

        </section>
    )
}