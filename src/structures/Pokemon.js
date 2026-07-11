export class Pokemon {
  constructor(name, hp, attack = 5, defense = 5) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
  }

  attack(enemy) {
    const damage = this.attack - enemy.defense;
    enemy.hp -= enemy.defense >= this.attack ? 0 : damage;

    return damage;
  }

  defend(enemy) {
    const enemyDamage = enemy.attack - this.defense;
    this.hp -= this.defense >= enemy.attack ? 0 : enemyDamage;

    return enemyDamage;
  }
}
