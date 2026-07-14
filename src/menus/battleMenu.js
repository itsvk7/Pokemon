import { intro, spinner } from "@clack/prompts";
import { setTimeout as sleep } from "node:timers/promises";
import colorize from "strcolorize";
import { playerTurn } from "../game/playerTurn.js";
import { computerTurn } from "../game/computerTurn.js";
import { stats } from "../game/stats.js";
import { selectedAction } from "./actionsPlayerMenu.js";

export async function battleMenu(playerPokemon, computerPokemon) {
  const s = await spinner();

  let currentPokémon = playerPokemon;
  let adversary = computerPokemon;

  let turnCount = 1;

  stats(playerPokemon, computerPokemon);

  while (playerPokemon.hp > 0 && computerPokemon.hp > 0) {
    intro(colorize(`#inverse[Turno ${turnCount}]`));

    await sleep(200);

    if (currentPokémon.name === playerPokemon.name) {
      const action = await selectedAction();

      playerTurn(action, playerPokemon, computerPokemon);

      await sleep(300);

      ++turnCount;
      currentPokémon = computerPokemon;
      adversary = playerPokemon;

      await sleep(500);

      stats(playerPokemon, computerPokemon);

      s.start("Carregando próximo turno...");

      await sleep(1500);

      s.stop("Turno carregado!");

      await sleep(750);
    } else {
      computerTurn(playerPokemon, computerPokemon);

      await sleep(300);

      ++turnCount;
      currentPokémon = playerPokemon;
      adversary = computerPokemon;

      await sleep(500);
      stats(playerPokemon, computerPokemon);

      s.start("Carregando próximo turno...");

      await sleep(1500);

      s.stop("Turno carregado!");
    }
  }
}
