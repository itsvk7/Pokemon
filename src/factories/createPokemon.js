import { Pokemon } from "../structures/Pokemon.js";

export async function createPokemon(pokemonList) {
  const pokemons = pokemonList.map(
    (pokemon) =>
      new Pokemon(pokemon.name, pokemon.hp, pokemon.attack, pokemon.defense),
  );

  return pokemons;
}
