import { note } from "@clack/prompts";

export function computerTurn(playerPokemon, computerPokemon) {
  const randomNumberGenerator = Math.floor(Math.random() * (100 - 1 + 1) + 1);

  if (randomNumberGenerator < 80) {
    const damage = computerPokemon.attack(playerPokemon);

    if (damage === 0 || damage * 2 === computerPokemon.attackDamage) {
      note(
        `${playerPokemon.name} defendeu o ataque e recebeu ${damage} de dano`,
      );
    } else {
      note(
        `${computerPokemon.name} atacou ${playerPokemon.name} e causou ${damage} de dano`,
      );
    }
  } else {
    computerPokemon.defend();

    note(`${computerPokemon.name} se defendeu para o próximo ataque`);
  }
}
