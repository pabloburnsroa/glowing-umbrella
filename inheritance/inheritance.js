/* 
Passing knowledge down 
*/

// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return 'attack with ' + this.weapon;
//   }
// }

// const Fiona = new Elf('Fiona', 'ninja stars');
// console.log(Fiona);

// Only cloned the object but not the base class Elf
// const ogre = { ...Fiona };
// console.log(ogre);
// console.log(Fiona === ogre); // returns false - not referencing the same place in memory

// How do we extend the Elf class
// extends

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'attack with ' + this.weapon;
  }
}

// Elf is the sub class
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

const Fiona = new Elf('Fiona', 'ninja stars', 'house');
console.log(Fiona);
