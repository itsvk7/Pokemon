import { intro, select, note } from "@clack/prompts";
import { setTimeout as sleep } from "node:timers/promises";
import colorize from "strcolorize";

export async function battle(pokemon1, pokemon2) {
  const duelists = [pokemon1, pokemon2];
  let turnCount = 1;

  while (pokemon1.hp > 0 && pokemon2.hp > 0) {
    intro(colorize(`#inverse[Turno ${turnCount}]`));

    if (duelists[0].name.toLowerCase() === pokemon1.name.toLowerCase()) {
      await sleep(300);

      const display = await note(`${pokemon1.name}
HP: ${pokemon1.hp}

${pokemon2.name}
HP: ${pokemon2.hp}
      `);

      await sleep(500);

      const options = await select({
        message: "O que deseja fazer?",
        options: [
          { value: 1, label: "[ 1 ] Atacar" },
          { value: 2, label: "[ 2 ] Defender" },
        ],
      });

      if (options === 1) {
        const damage = duelists[0].attack(duelists[1]);

        note(`${duelists[0].name} atacou e causou ${damage} de dano!`);

        ++turnCount;
        [duelists[0], duelists[1]] = [duelists[1], duelists[0]];

        await sleep(500);
      } else if (options === 2) {
        duelists[1].defend();
      }
    } else {
      const rng = Math.floor(Math.random() * (100 - 1 + 1) + 1);

      if (rng <= 80) {
        const damage = duelists[0].attack(duelists[1]);

        note(`${duelists[0].name} atacou e causou ${damage} de dano!`);

        ++turnCount;
        [duelists[0], duelists[1]] = [duelists[1], duelists[0]];

        await sleep(500);
      } else {
        duelists[0].defend();

        note(`${duelists[0].name} se defendeu!`);

        ++turnCount;
        [duelists[0], duelists[1]] = [duelists[1], duelists[0]];

        await sleep(500);
      }
    }
  }
}
