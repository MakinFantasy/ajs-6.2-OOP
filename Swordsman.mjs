import Character from "./app.mjs";

export default class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }
}