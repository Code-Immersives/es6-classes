import {Player, TicTacToe} from '../tictactoe'

describe('TicTacToe Class', () => {
  let game
  let player1 = new Player({name: 'tony', symbol: 'X'})
  let player2 = new Player({name: 'brian', symbol: 'O'})

  beforeEach(() => {
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
    expect(game.picBox(0, 0)).toBe(false)
  })

  test('if space is empty place player symbol', () => {
    game.picBox(0, 0)
    expect(game.board[0][0]).toEqual(game.currentPlayer.symbol)
  })
})
