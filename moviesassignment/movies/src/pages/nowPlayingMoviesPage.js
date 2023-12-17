import React from "react";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getNowPlayingMovies} from '../api/tmdb-api'


const NowPlayingMoviesPage = (props) => {
    const {data, error, isLoading, isError}  = useQuery('nowPlaying', getNowPlayingMovies)

    if (isLoading) return <Spinner/>
    if (isError) return <h1>{error.message}</h1>
    const movies = data.results;

    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    const mustWatch = movies.filter(m => m.mustWatch)
    localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

    return (
        <PageTemplate
            title="Now Playing!"
            movies={movies}
            action={(movie) => {
                return <AddToFavoritesIcon movie={movie} />
            }}
        />
    );
};
export default NowPlayingMoviesPage;