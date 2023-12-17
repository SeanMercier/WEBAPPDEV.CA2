# Assignment 1 - ReactJS app.

Name: Sean Mercier

## Overview.

This is a React app that I made that pulls data from this website using the TMDB (The Movie Database) API Key and displays it in my own React app.

### Features.
 
+ New Actors Page
+ New Favorite Actors Page
+ New Trending Movies Page
+ New Top Rated Movies Page
+ New Now Playing Movies Page
+ New Actor Details Page
+ New Actor Search Filter
+ Pagination attempted but incomplete

## Setup requirements.

No non-standard setup requirements

## API endpoints.

+ https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1
+ https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}
+ "https://api.themoviedb.org/3/genre/movie/list?api_key=" + process.env.REACT_APP_TMDB_KEY + "&language=en-US"
+ https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}
+ https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}
+ https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1
+ https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}
+ https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
+ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
+ https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}
+ https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US
+ https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
+ https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US

## Routing.

+ movies/trending - Displays a list of trending movies page
+ movies/nowPlaying - Displays a page of movies now in cinemas
+ movies/topRated - Displays a page of the all time top rated movies
+ actors/ - Displays a list of popular actors
+ actors/favorites - Displays a list of favorite actors
+ actors/:id - Displays a page with the actors' details


## Independent learning (If relevant).

Pagination, very brief and unsuccessful - https://mui.com/material-ui/react-pagination/