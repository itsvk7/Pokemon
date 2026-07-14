export class Pokemon {
  constructor({ name, hp, attack = 5, defense = 5 }) {
    this.name = name;
    this.hp = hp;
    this.attackDamage = attack;
    this.defense = defense;
    this.isDefending = false;
  }

  attack(enemy) {
    let damageDealt;

    if (enemy.isDefending) {
      damageDealt =
        enemy.defense >= this.attackDamage
          ? 0
          : Math.floor(this.attackDamage / 2);

      enemy.isDefending = false;
    } else {
      damageDealt =
        enemy.defense >= this.attackDamage
          ? 0
          : this.attackDamage - enemy.defense;
    }

    enemy.hp -= damageDealt;

    return damageDealt;
  }

  defend() {
    this.isDefending = true;
  }
}
