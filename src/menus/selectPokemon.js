import { log, confirm } from "@clack/prompts";
import { setTimeout as sleep } from "node:timers/promises";
import { showPokemonMenu } from "./showPokemonMenu.js";

export async function selectPokemon() {
  const selectedPokemon = await showPokemonMenu();

  await sleep(300);

  log.success(
    `[ System ] Você escolheu: ${selectedPokemon[0].toUpperCase() + selectedPokemon.slice(1)}`,
  );

  await sleep(300);

  const confirmSelection = await confirm({
    message: "[ System ] Você confirma sua escolha?",
  });

  return [selectedPokemon, confirmSelection];
}
