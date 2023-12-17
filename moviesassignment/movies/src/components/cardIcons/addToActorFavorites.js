import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ActorContext } from "../../contexts/actorContext";

const AddToActorFavoritesIcon = ({ actor }) => {
  const context = useContext(ActorContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToActorFavorites(actor);
  };

  return (
    <IconButton aria-label="add to actor favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToActorFavoritesIcon;