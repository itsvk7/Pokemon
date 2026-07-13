import { cancel } from "@clack/prompts";
import { battle } from "./src/battleMenu.js";
import { Pokemon } from "./src/structures/Pokemon.js";
import { selectPokemon } from "./src/menus/selectPokemon.js";

const POKEMON_LIST = function createPokemon(key) {
  const pokemon = POKEMON_LIST[key];

  return new Pokemon(pokemon.name, pokemon.hp, pokemon.attack, pokemon.defense);
};

function chooseRandomOpponent(excludingKey) {
  const options = Object.keys(POKEMON_LIST).filter(
    (key) => key !== excludingKey,
  );
  const randomIndex = Math.floor(Math.random() * options.length);

  return createPokemon(options[randomIndex]);
}

const [selectedPokemon, confirmSelection] = await selectPokemon();

if (!confirmSelection) {
  cancel("Operação cancelada.");
  process.exit(0);
}

const playerPokemon = createPokemon(selectedPokemon);
const computerPokemon = chooseRandomOpponent(selectedPokemon);

await battle(playerPokemon, computerPokemon);
