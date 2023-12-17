import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    "upcoming",
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const upcomingMovies = data.results;

  return (
    <PageTemplate
      movies={upcomingMovies}
      title="Upcoming Movies"
      action={(movie) => {
        // You can define your action here if needed
        return null;
      }}
    />
  );
};

export default UpcomingMoviesPage;