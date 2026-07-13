import { intro, select, log, confirm, isCancel, cancel } from "@clack/prompts";
import { setTimeout as sleep } from "node:timers/promises";
import colorize from "strcolorize";

export async function selectPokemon() {
  intro(colorize("#inverse[Pokemons]"));

  await sleep(200);

  const selectedPokemon = await select({
    message: "Escolha um pokémon:",
    options: [
      { value: "charmander", label: "[ 1 ] Charmander" },
      { value: "squirtle", label: "[ 2 ] Squirtle" },
    ],
  });

  await sleep(200);

  if (isCancel(selectedPokemon)) {
    cancel("Operação cancelada");
    return process.exit(0);
  }

  await sleep(300);

  log.success(
    `[ System ] Você escolheu: ${selectedPokemon[0].toUpperCase() + selectedPokemon.slice(1)}`,
  );

  await sleep(300);

  const confirmSelection = await confirm({
    message: "Você confirma sua escolha?",
  });

  return [selectedPokemon, confirmSelection];
}
