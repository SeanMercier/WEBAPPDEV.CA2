import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import { Button, Avatar, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddToActorFavoritesIcon from "../cardIcons/addToActorFavorites";
import { ActorContext } from "../../contexts/actorContext";
import Pagination from "@mui/material";

const ActorCard = ({ actors, action }) => {
  const { favorites, addToActorFavorites } = useContext(ActorContext);
  const isFavorite = favorites.includes(actors.id);

  const handleFavoriteClick = () => {
    addToActorFavorites(actors);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              backgroundColor: isFavorite ? 'red' : 'inherit',
            }}
          >
            <FavoriteIcon />
          </Avatar>
        }
        title={
          <Typography variant="h5" component="p">
            {actors.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actors.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
            : img
        }
      />
      <CardActions disableSpacing>
        <IconButton
          aria-label="toggle favorite"
          onClick={handleFavoriteClick}
          color={isFavorite ? "error" : "inherit"}
        >
          <AddToActorFavoritesIcon />
        </IconButton>
        <Link to={`/actors/${actors.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            Biography...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );

};

export default ActorCard;