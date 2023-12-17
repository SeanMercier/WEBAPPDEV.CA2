import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};


const ActorDetails = ({ actors }) => { 
  
  return (
    <>
      <Typography variant="h5" component="h3">
        {actors.name}
      </Typography>

      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
         <Chip
         label={`Popularity rating: ${actors.popularity}`}
        />
        
        <Chip
         label={`Date of birth: ${actors.birthday}`}
        />

         <Chip
         label={`Birthplace: ${actors.place_of_birth}`}
        />
        </Paper>
        <Link to={`https://www.themoviedb.org/person/${actors.id}`} style={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
      <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Learn More
      </Button>
    </Link>
      </>
  );
};
export default ActorDetails ;