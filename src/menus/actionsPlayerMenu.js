import { select, spinner } from "@clack/prompts";
import { setTimeout as sleep } from "node:timers/promises";

export async function selectedAction() {
  const s = await spinner();

  const action = await select({
    message: "O que deseja fazer?",
    options: [
      { value: 1, label: "[ 1 ] Atacar" },
      { value: 2, label: "[ 2 ] Defender" },
    ],
  });

  s.start("Carregando ação...");

  await sleep(2000);

  s.stop("Ação carregada!");

  await sleep(1000);

  return action;
}
