import { battleMenu } from "./src/menus/battleMenu.js";
import { setupBattle } from "./src/game/setupBattle.js";

const { playerPokemon, computerPokemon } = await setupBattle();

await battleMenu(playerPokemon, computerPokemon);
