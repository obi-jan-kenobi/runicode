'use strict'

const dict = {
  a: 5830,
  b: 5843,
  c: 5837,
  d: 5841,
  e: 5826,
  f: 5792,
  g: 5813,
  h: 5821,
  i: 5825,
  j: 5827,
  k: 5873,
  l: 5851,
  m: 5849,
  n: 5823,
  o: 5805,
  p: 5844,
  q: 5865,
  r: 5809,
  s: 5836,
  t: 5840,
  u: 5794,
  v: 5793,
  w: 5797,
  x: 5866,
  y: 5796,
  z: 5838
}

const Maybe = x => ({
  map: f => Maybe(nullCheck(x) ? null : f(x)),
  fold: f => (nullCheck(x) ? null : f(x))
})

const nullCheck = x => (x === null || x === undefined)

// toRunicode :: String -> String
const toRunicode = str =>
  Maybe(str)
  .map(s => typeof s === 'string' ? s : null)
  .map(s => s.toLowerCase())
  .map(s => s.split(''))
  .map(s => s.map(c => (dict[c] ? String.fromCharCode(dict[c]) : c)))
  .fold(s => s.join(''))

module.exports = toRunicode