import {Player, TicTacToe} from '../tictactoe'

describe('TicTacToe Class', () => {
  let game
  let player1
  let player2

  beforeEach(() => {
    player1 = new Player('tony', 'X')
    player2 = new Player('brian', 'O')
    game = new TicTacToe(player1, player2)
  })

  test('constructor is defined', () => {
    expect(game.constructor).toBeDefined()
  })

  test('game instance must contain props', () => {
    expect(game).toHaveProperty('players')
    expect(game).toHaveProperty('turns')
    expect(game).toHaveProperty('board')
    expect(game.picBox).toBeDefined()
    expect(game.turnChange).toBeDefined()
    expect(game.checkWinner).toBeDefined()
  })

  test('picBox method should not allow overwriting', () => {
    game.board[0][0] = 'X'
    expect(game.picBox(0, 0)).toMatch('cannot place symbol on a occupied square')
  })

  test('if space is empty place player symbol', () => {
    let currentPlayer = game.currentPlayer
    game.picBox(0, 0)
    expect(game.board[0][0]).toBe(currentPlayer.symbol)
  })

  test('does turnChange() actually alternate players', () => {
    let currentPlayer = game.currentPlayer
    game.turnChange()
    expect(game.currentPlayer).not.toBe(currentPlayer)
  })

  test('does the game turns property increment correctly', () => {
    game.picBox(0, 1)
    game.picBox(1, 1)
    game.picBox(0, 2)
    game.picBox(0, 1)
    expect(game.turns).toBe(3)
  })

  test('was there a tie game', () => {
    game.picBox(0, 1)
    game.picBox(1, 1)
    game.picBox(2, 0)
    game.picBox(0, 0)
    game.picBox(1, 0)
    game.picBox(0, 2)
    game.picBox(2, 2)
    game.picBox(2, 1)
    expect(game.picBox(1, 2)).toMatch('tie game')
  })
  test('did player win the game', () => {
    game.picBox(0, 1)
    game.picBox(1, 1)
    game.picBox(2, 0)
    game.picBox(0, 0)
    game.picBox(1, 0)
    game.picBox(0, 2)
    game.picBox(2, 1)
    expect(game.picBox(2, 2)).toMatch(`${game.currentPlayer.name} you win!`)
  })
})
