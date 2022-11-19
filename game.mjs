import Bowman from './Bowman.mjs';
import Swordsman from './Swordsman.mjs';
import Magician from './Magician.mjs';
import Daemon from './Daemon.mjs';
import Undead from './Undead.mjs';
import Zombie from './Zombie.mjs';

const bowman = new Bowman('Antonio');
const swordsman = new Swordsman('Anton');
console.log(bowman);
console.log(swordsman);
swordsman.levelUp();
bowman.damage(50);
console.log(swordsman);
console.log(bowman);


const errorTest = new Daemon('Ivan', 'Bowman'); // Второй аргумент добавить можно, только он не учитывается 
console.log(errorTest);