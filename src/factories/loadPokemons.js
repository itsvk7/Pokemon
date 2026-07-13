import { Pokemon } from "../structures/Pokemon.js";

export function loadPokemons(pokemonList) {
  const pokemons = pokemonList.map((pokemon) => {
    const { name, hp, attack, defense } = pokemon;

    new Pokemon({ name, hp, attack, defense });
  });

  return pokemons;
}
