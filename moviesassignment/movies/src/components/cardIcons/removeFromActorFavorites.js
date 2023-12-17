import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { ActorContext } from "../../contexts/actorContext";

const RemoveFromActorFavoritesIcon = ({ actor }) => {
  const context = useContext(ActorContext);

  const handleRemoveFromActorFavorites = (e) => {
    e.preventDefault();
    context.removeFromFavourites(actor);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromActorFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromActorFavoritesIcon;