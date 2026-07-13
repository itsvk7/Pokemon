import { cancel } from "@clack/prompts";
import { battle } from "./src/battleMenu.js";
import { selectPokemon } from "./src/menus/selectPokemon.js";
import pokemonList from "./src/constants/pokemonsList.json" with { type: "json" };
import { createPokemon } from "./src/factories/createPokemon.js";

const POKEMONS = await createPokemon(pokemonList);

function chooseRandomOpponent(excludingKey) {
  const pokemonsOptions = POKEMONS.filter(
    (key) => key.name.toLowerCase() !== excludingKey,
  );
  const randomIndex = Math.floor(Math.random() * pokemonsOptions.length);

  return pokemonsOptions[randomIndex];
}

const [selectedPokemon, confirmSelection] = await selectPokemon();

if (!confirmSelection) {
  cancel("Operação cancelada.");
  process.exit(0);
}

const playerPokemon = POKEMONS.find(
  (pokemon) => pokemon.name.toLowerCase() === selectedPokemon,
);
const computerPokemon = chooseRandomOpponent(selectedPokemon);

await battle(playerPokemon, computerPokemon);
