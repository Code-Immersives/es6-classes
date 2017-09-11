
class PlayerForm {
  constructor (playerNum) {
    this.pForm = document.getElementById(playerNum)
    this.player = playerNum
    this.render()
    this.pForm.addEventListener('click', this.addPlayer.bind(this))
  }
  addPlayer () {
    console.log(new Player(document.getElementsByClassName(this.player)[0].value, document.getElementsByClassName(this.player)[1].value))
  }
  renderForm () {
    return `<form>
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input class="${this.player}" id="icon_prefix" type="text" >
          <label for="icon_prefix">Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">apps</i>
          <input class="${this.player}" id="icon_telephone" type="text" >
          <label for="icon_telephone">Symbol</label>
        </div>
      </div>
    </form>`
  }
  render () {
    this.pForm.innerHTML = this.renderForm()
    // this.player1form.innerHTML = this.renderForm()
  }
}
let playerOne = new PlayerForm('player1')
let playerTwo = new PlayerForm('player2')

class Player {
  constructor (name, symbol) {
    this.name = name
    this.symbol = symbol
    this.totalScore = 0
  }

}
