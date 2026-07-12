import { Pokemon } from "./src/structures/Pokemon.js";
import { battle } from "./src/battleMenu.js";
import { selectPokemon } from "./src/menus/selectPokemon.js";

const confirm = await selectPokemon();

if (confirm) {
  const charmander = new Pokemon("Charmander", 39, 12, 7);
  const squirtle = new Pokemon("Squirtle", 44, 10, 9);

  battle(charmander, squirtle);
}
