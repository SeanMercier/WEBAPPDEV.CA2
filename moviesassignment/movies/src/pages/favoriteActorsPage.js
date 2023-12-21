import React, { useContext } from "react";
import TemplateActorListPage from "../components/templateActorListPage";
import { ActorContext } from "../contexts/actorContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { Paper } from "@mui/material";
import RemoveFromActorFavoritesIcon from "../components/cardIcons/removeFromActorFavorites";

const FavoriteActorsPage = () => {
  const {favorites: actorsIds } = useContext(ActorContext);


  const favoriteActorQueries = useQueries(
    actorsIds.map((actorId) => {
      return {
        queryKey: ["actors", { id: actorId }],
        queryFn: getActor,
      };
    })
  );

  const isLoading = favoriteActorQueries.some((query) => query.isLoading);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favoriteActorQueries.map((query) => query.data);

  return (
    <TemplateActorListPage
      title="Favorite Actors"
      actors={actors}
      action={(actor) => {
        return (
          <>
          <Paper />
            <RemoveFromActorFavoritesIcon actor={actor} />
          </>
        );
      }}
    />
  );
};

export default FavoriteActorsPage;