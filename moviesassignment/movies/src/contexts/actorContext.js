import React, { useState } from "react";

export const ActorContext = React.createContext(null);

const ActorContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addToActorFavorites = (actor) => {
    // Check if actor is defined and has an 'id' property
    if (actor && actor.id) {
      // Check if the actor is not already in favorites
      if (!favorites.includes(actor.id)) {
        // Create a new array with the actor's id added
        const newFavorites = [...favorites, actor.id];
        setFavorites(newFavorites);
        console.log(newFavorites);
      }
    }
  };

  const removeFromActorFavorites = (actor) => {
    setFavorites(favorites.filter((mId) => mId !== actor.id));
  };

  return (
    <ActorContext.Provider
      value={{
        favorites,
        addToActorFavorites,
        removeFromActorFavorites,
      }}
    >
      {props.children}
    </ActorContext.Provider>
  );
};

export default ActorContextProvider;