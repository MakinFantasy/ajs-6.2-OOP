import Character from "./app.mjs";

export default class Undead extends Character{
    constructor(name){
        super(name, 'Undead');
        this.health = 100;
        this.level = 1;
        this.attack = 25;
        this.defence = 25;
    }
}