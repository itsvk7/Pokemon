import { intro, select, note } from "@clack/prompts";
import colorize from "strcolorize";

export async function battle(pokemon1, pokemon2) {
  while (pokemon1.hp > 0 || pokemon2.hp > 0) {
    const duelists = [pokemon1.name, pokemon2.name];
    let turnCount = 0;

    intro(colorize(`#inverse[Turno ${++turnCount}]`));

    const display = await note(`${pokemon1.name}
HP: ${pokemon1.hp}

${pokemon2.name}
HP: ${pokemon2.hp}
      `);
    const options = await select({
      message: "O que deseja fazer?",
      options: [
        { value: 1, label: "[ 1 ] Atacar" },
        { value: 2, label: "[ 2 ] Defender" },
      ],
    });
  }
}
