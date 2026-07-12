export class Pokemon {
  constructor(name, hp, attack = 5, defense = 5) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.isDefend = false;
  }

  attack(enemy) {
    const damage = this.attack - enemy.defense;

    if (enemy.isDefend) {
      enemy.hp -= enemy.defense >= this.attack ? 0 : Math.floor(damage / 2);
    }

    enemy.hp -= enemy.defense >= this.attack ? 0 : damage;

    return damage;
  }

  defend(enemy) {
    this.isDefend = true;
  }
}
