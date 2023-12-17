import React from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/actorDetails";
import TemplateActorPage from "../components/templateActorPage";
import { getActor } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'


const ActorDetailsPage = (props) => {
  const { id } = useParams();

  const { data: actors, error, isLoading, isError } = useQuery(
    ["actors", { id: id }],
    getActor
  );

  console.log(actors)
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actors ? (
        <>
          <TemplateActorPage actors={actors}>
            <ActorDetails actors={actors} />
          </TemplateActorPage>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;