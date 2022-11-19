const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor (name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error ('Character name error');
    } else {
      this.name = name;
    }
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error ('Character type error');
    }
  }
  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
    } else {
      console.log('Character dead')
    }
  }

  damage (points) {
    if (this.health > 0) {
      this.health = this.health - points * (1 - this.defence /  100);
    } else {
      console.log('Character dead')
    }
  }
}