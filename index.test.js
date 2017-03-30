const assert = require('assert')
const runicode = require('./')

assert.equal(runicode(123), null)
assert.equal(runicode({prop: 'value'}, null))
assert.equal(runicode('hello world'), 'ᚽᛂᛛᛛᚭ ᚥᚭᚱᛛᛑ')