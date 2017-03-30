[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/obi-jan-kenobi/runicode.svg?branch=master)](https://travis-ci.org/obi-jan-kenobi/runicode/)

# runicode

### Encode Strings to Runes

* ** no dependencies

Exports single function that encodes strings. Every other input will return null.

### Installation

```
npm install runicode
```

### Example

```javascript
const runicode = require('runicode')
const to_valhallo = runicode('hello world')
```

to_valhallo will be ᚽᛂᛛᛛᚭ ᚥᚭᚱᛛᛑ
