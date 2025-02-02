import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useAxios } from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(
    "pokemon",
    "https://pokeapi.co/api/v2/pokemon/"
  );
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemon}>Delete the pokemon!</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(card => (
          <PokemonCard
            key={card.id}
            // front={cardData.sprites.front_default}
            // back={cardData.sprites.back_default}
            // name={cardData.name}
            // stats={cardData.stats.map(stat => ({
            //   value: stat.base_stat,
            //   name: stat.stat.name
            // }))}
            {...card}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
