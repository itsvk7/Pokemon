import {
  intro,
  select,
  note,
  log,
  confirm,
  isCancel,
  cancel,
} from "@clack/prompts";
import { setTimeout as sleep } from "node:timers/promises";
import colorize from "strcolorize";

export async function selectPokemon() {
  intro(colorize("#inverse[Pokemons]"));

  await sleep(200);

  const choice = await select({
    message: "Escolha um pokémon:",
    options: [
      { value: "charmander", label: "[ 1 ] Charmander" },
      { value: "squirtle", label: "[ 2 ] Squirtle" },
    ],
  });

  await sleep(200);

  if (isCancel(choice)) {
    cancel("Operação cancelada");
    return process.exit(0);
  }

  await sleep(300);

  log.success(
    `[ System ] Você escolheu: ${choice[0].toUpperCase() + choice.slice(1)}`,
  );

  await sleep(300);

  const confirmChoice = await confirm({
    message: "Você confirma sua escolha?",
  });

  return confirmChoice;
}
