import React from "react";
import TemplateActorListPage from "../components/templateActorListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getActors } from '../api/tmdb-api';

const ActorsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery('actors', getActors);

  if (isLoading) {
    return <Spinner />;
  }
  
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = actors.filter(actor => actor.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  return (
    <TemplateActorListPage
      title="Actors"
      actors={actors}
      action={(actors) => {

      }}
    />
  );
};

export default ActorsPage;