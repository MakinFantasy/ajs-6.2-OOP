import Character from "./app.mjs";

export default class Magician extends Character {
    constructor(name){
        super(name, 'Magician');
        this.health = 100;
        this.level = 1;
        this.attack = 10;
        this.defence = 40;
    }
}