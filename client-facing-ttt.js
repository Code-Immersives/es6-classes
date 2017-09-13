
// =========================================
// Player Form Class for creating players and forms
// =========================================
class PlayerForm {
  constructor (playerNum) {
    this.pForm = document.getElementById(playerNum) // grab the div based off of player1 or player2
    this.player = playerNum // save the string player reference to add to the form template string in renderForm()
    this.render() // render
    this.playerSubmitBtn = document.getElementById(`${this.player}-btn`)
    this.playerSubmitBtn.addEventListener('click', this.addPlayer.bind(this))
    this.nameInput = ''
    this.symbolInput = ''
  }
  addPlayer () {
    // Create a player and add to game object and change the display
    this.nameInput = document.getElementsByClassName(this.player)[0].value
    this.symbolInput = document.getElementsByClassName(this.player)[1].value
    let p = new Player(this.nameInput, this.symbolInput)
    myGame.players.push(p)
    myGame.currentPlayer = myGame.players[0]
    this.renderPlayerInfo(p)
  }
  renderPlayerInfo (p) {
    let chipHTML = `<div class="chip">
                      ${p.name}
                      <i>${p.symbol}</i>
                      Score: ${p.totalScore}
                    </div>`
    this.pForm.innerHTML = chipHTML
  }
  renderForm () {
    return `<form>
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input class="${this.player} validate" id="icon_prefix" type="text" >
          <label for="icon_prefix">Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">apps</i>
          <input class="${this.player} validate" id="icon_telephone" type="text" >
          <label for="icon_telephone">Symbol</label>
        </div>
        <div class="input-field col s12">
          <a id="${this.player}-btn" class="center waves-effect waves-light btn">Add ${this.player}</a>
        </div>
      </div>
    </form>`
  }
  render () {
    this.pForm.innerHTML = this.renderForm()
  }
}
// =========================================
// GameBoard Class for rendering 9x9 grid
// =========================================
class GameBoard {
  constructor () {
    this.boardDiv = document.getElementById('game-board')
    this.board = [[null, null, null],
                 [null, null, null],
                 [null, null, null]]
    this.render()
    this.boardDiv.addEventListener('click', this.onBoxClick.bind(this))
  }
  changeBox (x, y) {
    let box = document.getElementById(`${x}-${y}`)
    box.innerHTML = myGame.currentPlayer.symbol
  }
  addBox (x, y) {
    return `<div class="box" id="${x}-${y}">&#9634</div>`
  }
  onBoxClick () {
    let x = event.target.id[0]
    let y = event.target.id[2]
    if (myGame.picBox(x, y)) {
      myGame.currentPlayer.totalScore++
      alert(`${myGame.currentPlayer.name} you win!`)
    }
  }
  render () {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[i].length; j++) {
        this.boardDiv.innerHTML += this.addBox(i, j)
      }
    }
  }
}
// =========================================
// TIC TAC TOE CLASS AND GAME LOGIC
// =========================================
class TicTacToe {
  constructor () {
    this.players = []
    this.currentPlayer = {}
    this.guiBoard = {}
    this.turns = 1
  }

  picBox (x, y) {
    if (this.guiBoard.board[x][y]) {
      return 'cannot place symbol on a occupied square'
    } else {
      this.guiBoard.board[x][y] = this.currentPlayer.symbol
      this.guiBoard.changeBox(x, y)
      return this.checkWinner(x, y)
    }
  }
  turnChange () {
    this.turns++
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1]
    } else {
      this.currentPlayer = this.players[0]
    }
  }
  checkWinner (x, y) {
    let playerCheck = `${this.currentPlayer.symbol}${this.currentPlayer.symbol}${this.currentPlayer.symbol}`
    if (this.turns < 5) return this.turnChange()
    if (this.horizantalCheck(x, playerCheck) || this.diagnalCheck(playerCheck) || this.verticalCheck(y, playerCheck)) {
      return true
    } else {
      this.turnChange()
      if (this.turns >= 9) return 'tie'
      return false
    }
  }
  horizantalCheck (x, playerCheck) {
    if (this.guiBoard.board[x].join('') === playerCheck) {
      return true
    } else {
      return false
    }
  }
  verticalCheck (y, playerCheck) {
    let checkArra = []
    for (let i = 0; i < 3; i++) {
      checkArra.push(this.guiBoard.board[i][y])
    }
    if (checkArra.join('') === playerCheck) {
      return true
    } else {
      return false
    }
  }
  diagnalCheck (playerCheck) {
    let checkOne = []
    let checkTwo = []
    for (let i = 0, j = 2; i < 3; i++, j--) {
      checkOne.push(this.guiBoard.board[i][i])
      checkTwo.push(this.guiBoard.board[i][j])
    }
    if (checkOne.join('') === playerCheck || checkTwo.join('') === playerCheck) {
      return true
    } else {
      return false
    }
  }

}
// =========================================
// PLAYER CLASS
// =========================================
class Player {
  constructor (name, symbol) {
    this.name = name
    this.symbol = symbol
    this.totalScore = 0
  }
}

// Create player 1 and player 2 forms and add them to the screen
let playerOne = new PlayerForm('player1')
let playerTwo = new PlayerForm('player2')
let myBoard = new GameBoard()
let myGame = new TicTacToe()
myGame.guiBoard = myBoard
