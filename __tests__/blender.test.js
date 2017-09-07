import Blender from '../blender'

describe('Blender Class', () => {
  let blender

  beforeEach(() => {
    blender = new Blender(['apple', 'orange', 'grape'])
  })

  test('constructor is defined', () => {
    expect(blender.constructor).toBeDefined()
  })

  test('blender instance must contain props', () => {
    expect(blender).toHaveProperty('isOn', false)
    expect(blender).toHaveProperty('fruits')
    expect(blender.flipSwitch).toBeDefined()
  })

  test('turn the blender on/off', () => {
    if (blender.isOn) {
      blender.flipSwitch()
      expect(blender.isOn).toBe(false)
    } else {
      blender.flipSwitch()
      expect(blender.isOn).toBe(true)
    }
  })

  test('only mix if blender is on', () => {
    expect(blender.mix()).toBe(false)
  })

  test('calling mix should return a string', () => {
    blender.flipSwitch()
    expect(blender.mix()).toEqual(expect.any(String))
  })

  test('all original string characters preserved on mix()', () => {
    let checkString = blender.fruits.join('').split('')
    blender.flipSwitch()
    let resultString = blender.mix()
    for (let i = 0; i < checkString.length; i++) {
      expect(resultString).toMatch(new RegExp(checkString[i]))
    }
  })
})
