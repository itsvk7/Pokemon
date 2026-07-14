import { note } from "@clack/prompts";

export async function playerTurn(selectedAction, playerPokemon, enemy) {
  if (selectedAction === 1) {
    const damage = playerPokemon.attack(enemy);

    if (damage === 0 || damage * 2 === playerPokemon.attackDamage) {
      note(`${enemy.name} defendeu o ataque e recebeu ${damage} de dano`);
    } else {
      note(
        `${playerPokemon.name} atacou ${enemy.name} e causou ${damage} de dano`,
      );
    }
  } else {
    playerPokemon.defend();

    note(`${playerPokemon.name} se defendeu para o próximo ataque`);
  }
}
