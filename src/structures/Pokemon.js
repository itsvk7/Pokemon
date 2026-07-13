export class Pokemon {
  constructor(name, hp, attackDamage = 5, defense = 5) {
    this.name = name;
    this.hp = hp;
    this.attackDamage = attackDamage;
    this.defense = defense;
    this.isDefend = false;
  }

  attack(enemy) {
    const damage = this.attackDamage - enemy.defense;

    if (enemy.isDefend) {
      enemy.hp -=
        enemy.defense >= this.attackDamage ? 0 : Math.floor(damage / 2);
      enemy.isDefend = false;
    } else {
      enemy.hp -= enemy.defense >= this.attackDamage ? 0 : damage;
    }

    return damage;
  }

  defend() {
    this.isDefend = true;
  }
}
