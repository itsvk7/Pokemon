import { Pokemon } from "../structures/Pokemon.js";

export function loadPokemons(pokemonList) {
  const pokemons = pokemonList.map((pokemon) => new Pokemon(pokemon));

  return pokemons;
}
