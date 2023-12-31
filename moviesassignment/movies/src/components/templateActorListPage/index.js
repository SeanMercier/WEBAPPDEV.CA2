import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterActorsCard from "../filterActorsCard";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";

function TemplateActorListPage({ actors, title, action }) {
  const [nameFilter, setNameFilter] = useState("");

  // Ensure actors is an array before filtering
  let displayedActors = Array.isArray(actors)
    ? actors.filter((m) => m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1)
    : [];
    
  console.log(displayedActors);

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterActorsCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
          />
        </Grid>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}

export default TemplateActorListPage;