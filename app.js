// constructor function review ES2014 syntax
function Plane (color, brand, hasTvs, wings) {
  this.wings = wings || 2
  this.wheels = 3
  this.elevation = 0
  this.color = color
  this.brand = brand
  this.hasTvs = hasTvs // if(typeof hasTvs == 'boolean')
}
// not valid Plane.wings

Plane.prototype.fly = function () {
  this.elevation += 3000
}

var boeing747 = new Plane('egg shell white', 'Southwest', false)
boeing747.fly()
boeing747.wings

// ES6 Classes syntax

class Superhero {
  constructor (name) { // every class you create should have a constructor method
    this.powers = []
    this.name = name
  }
  // ["smoke bombs","new suit"]
  addPower (powersArray) {
    // this.powers.push(power)
    // old array this.powers ["alfred","batmobile", "utility belt", "batplane"]
    // ["alfred","batmobile", "utility belt", "batplane","smoke bombs","new suit"]
    this.powers = [...this.powers, ...powersArray ]
  }
}

let Batman = new Superhero('Bruce Wayne')
Batman.addPower(['alfred', 'batmobile', 'utility belt', 'batplane'])
Batman.addPower(['smoke bombs', 'new suit'])
Batman.name = 'Change his name'

// ====================BLENDER EXERCISE============================================
// blender class , constructor will take a array of strings ['apple', 'orange']
// have method that turns the blender on or off
// second method called mix that will take the array of strings and blend the words to return a single string
// ['apple', 'orange'] => 'geapleorapn'

class Blender {
  constructor (fruitsArray) {
    this.fruits = fruitsArray // ['apple', 'orange', 'strawberry']
    this.isOn = false // set to off which false
  }
  flipSwitch () {
    this.isOn = !this.isOn
    // if (this.isOn) {
    //   this.isOn = false
    //   return false
    // } else {
    //   this.isOn = true
    //   return true
    // }
  }
  mix () {
    // if blender is on
    if (this.isOn) {
      // turn array into a new array of all characters [apple] = [a,p,p,l,e]
      this.fruits = this.fruits.join('').split('')
      // ["a", "p", , "l", "e",  "r","p" "a", "n", "g", "e", "o","s", "t", "r", "a", "w", "b", "e", "r", "r", "y"]
      for (let i = 0; i < this.fruits.length; i++) {
        let randomNum = Math.floor(Math.random() * (this.fruits.length))
        let tempFruit = this.fruits[i]
        this.fruits[i] = this.fruits[randomNum]
        this.fruits[randomNum] = tempFruit
      }
      // combine to one string and return
      // scramble characters
      this.fruits = this.fruits.join('')
      return this.fruits
    } else {
      // else tell user to turn on blender
      alert('turn your blender on!!!')
    }
  }
}

let vitaMix = new Blender(['apple', 'orange', 'strawberry'])

