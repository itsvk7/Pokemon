import { note } from "@clack/prompts";

export function stats(playerPokemon, computerPokemon) {
  const duelists = [playerPokemon, computerPokemon];

  const message = duelists.reduce((acc, pokemon) => {
    return acc + `${pokemon.name}\nHP: ${pokemon.hp}\n\n`;
  }, "");

  note(message);
}
