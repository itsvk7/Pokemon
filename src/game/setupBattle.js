import { cancel } from "@clack/prompts";
import { selectPokemon } from "../menus/selectPokemon.js";
import pokemonList from "../utils/constants/pokemonsList.json" with { type: "json" };
import { loadPokemons } from "../factories/loadPokemons.js";

const pokemons = loadPokemons(pokemonList);

function chooseRandomOpponent(pokemons, excludingName) {
  const pokemonsOptions = pokemons.filter(
    (pokemon) => pokemon.name.toLowerCase() !== excludingName,
  );
  const randomIndex = Math.floor(Math.random() * pokemonsOptions.length);

  return pokemonsOptions[randomIndex];
}

export async function setupBattle() {
  const [selectedPokemon, confirmSelection] = await selectPokemon();

  if (!confirmSelection) {
    cancel("Operação cancelada.");
    process.exit(0);
  }

  const playerPokemon = pokemons.find(
    (pokemon) => pokemon.name.toLowerCase() === selectedPokemon,
  );

  const computerPokemon = chooseRandomOpponent(pokemons, selectedPokemon);

  return { playerPokemon, computerPokemon };
}
