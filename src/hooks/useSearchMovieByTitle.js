import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export function useSearchMovieByTitle(movieTitle) {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (!movieTitle) {
            setSearchResults([]);
            return;
        }

        MoviesService.SearchByMovieTitle(movieTitle).then(({ data }) => {
             setSearchResults(data.results)
        });
    }, [movieTitle]);


    return searchResults;
}