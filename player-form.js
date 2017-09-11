class PlayerForm {
  constructor (player) {
    this.pForm = document.getElementById(player)
    // this.player2form = document.getElementById('player2')
  }
  renderForm () {
    return `<form>
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">apps</i>
          <input id="icon_telephone" type="tel" class="validate">
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

// let appendForm = new PlayerForm()
// appendForm.render()

class Player extends PlayerForm {
  constructor (name, symbol, playerNum) {
    super(playerNum)
    this.name = name
    this.symbol = symbol
    this.totalScore = 0
    this.pForm.addEventListener('click', this.addPlayer.bind(this))
  }
  addPlayer () {
    event.preventDefault()
  }

}

let Tony = new Player('tony', 'T', 'player1')
Tony.render()
