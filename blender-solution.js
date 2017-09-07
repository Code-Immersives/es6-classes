
// ====================BLENDER EXERCISE============================================
// blender class , constructor will take a array of strings ['apple', 'orange']
// have method that turns the blender on or off
// second method called mix that will take the array of strings and blend the words to return a single string
// ['apple', 'orange'] => 'geapleorapn'

export default class Blender {
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
      console.log('turn your blender on!!!')
      return false
    }
  }
}

let vitaMix = new Blender(['apple', 'orange', 'strawberry'])
