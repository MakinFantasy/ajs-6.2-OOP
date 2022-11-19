import Character from "./app.mjs";

export default class Zombie extends Character {
    constructor(name){
        super(name, 'Zombie');
        this.health = 100;
        this.level = 1;
        this.attack = 40;
        this.defence = 10;
    }
}