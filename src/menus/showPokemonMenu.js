import { intro, select, isCancel, cancel } from "@clack/prompts";
import { setTimeout as sleep } from "node:timers/promises";
import pokemonList from "../utils/constants/pokemonsList.json" with { type: "json" };
import colorize from "strcolorize";

export async function showPokemonMenu() {
  intro(colorize("#inverse[Pokemons]"));

  await sleep(200);

  const pokemonOptions = pokemonList.map((pokemon, index) => ({
    value: pokemon.name.toLowerCase(),
    label: `[ ${index + 1} ] ${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}`,
  }));

  const chosenPokemon = await select({
    message: "[ System ] Escolha um Pokémon:",
    options: pokemonOptions,
  });

  await sleep(200);

  if (isCancel(chosenPokemon)) {
    cancel("Operação cancelada.");
    return process.exit(0);
  }

  return chosenPokemon;
}
