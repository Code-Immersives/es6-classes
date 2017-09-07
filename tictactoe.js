// ====================TicTacToe Lab============================================
// Create a JS Classes that will simulate a game of tic tac toe with two players
// When you are done or if you want to check parts of the app run Npm test

export class Player {
  constructor (name, symbol) {
    this.name = name
    this.symbol = symbol
    this.totalScore = 0
  }
}

export class TicTacToe {
  constructor (player1, player2) {
    this.currentPlayer = player1
    this.players = [player1, player2]
    this.board = [[null, null, null]
                  [null, null, null]
                  [null, null, null]]
    this.turns = 0
  }
  picBox (x, y) {
    // find location in array if not null do not let player pic the box
    // if box is null then place the current players symbol in the box location
    // run the check for winner method
    // if true then stop game and increment current players score by one
    // else
    // run the turn change method
  }
  turnChange () {
    // increment turns by 1
    // check current player agains the players array and swap them
  }
  checkWinner () {
    // check for turns < 5 if so return false, not enough for a win yet
    // check for tie game based on turns
    // if true stop the game and start a new one
    // win logic
    // check 8 possible conditions against the current player symbol in board array
    // return true win there is a winner conditions
    // else return false

  }

}
// creating my two players
let Tony = new Player('tony', 'X')
let Brian = new Player('brian', 'O')

// start the game
let tonyVSbrian = new TicTacToe(Tony, Brian)

// first player will place symbol in a box
tonyVSbrian.picBox(1, 1) // player1
tonyVSbrian.picBox(0, 1) // player2
tonyVSbrian.picBox(1, 0)
tonyVSbrian.picBox(0, 0)
tonyVSbrian.picBox(1, 2) // player 1 should win
