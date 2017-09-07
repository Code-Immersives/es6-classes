// ===============In Class Code==========================
// constructor function review ES2014 syntax
function Plane (color, brand, hasTvs, wings) {
  this.wings = wings || 2
  this.wheels = 3
  this.elevation = 0
  this.color = color
  this.brand = brand
  this.hasTvs = hasTvs // might want to add type checking later, if(typeof hasTvs == 'boolean')
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

