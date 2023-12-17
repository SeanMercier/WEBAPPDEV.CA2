import React from "react";
import FilterActorsCard from "../components/filterActorsCard";

export default {
  title: "Home Page/FilterActorsCard",
  component: FilterMoviesCard,
};

export const Basic = () => {
  return <FilterActorsCard />;
};
Basic.storyName = "Default";