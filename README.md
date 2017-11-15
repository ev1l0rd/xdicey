## xdicey

[![NPM](https://nodei.co/npm/xdicey.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/xdicey/)

[![Travis](https://img.shields.io/travis/ev1l0rd/xdicey.svg)](https://travis-ci.org/ev1l0rd/xdicey) [![npm](https://img.shields.io/npm/dt/xdicey.svg)](https://www.npmjs.com/package/xdicey) [![npm](https://img.shields.io/npm/v/xdicey.svg)]() [![node](https://img.shields.io/node/v/xdicey.svg)]() [![license](https://img.shields.io/github/license/ev1l0rd/xdicey.svg)](https://github.com/ev1l0rd/xdicey/blob/master/LICENSE)

Throw an x sided dice y amount of times.

### Example
```
dice = require("xdicey") //Require the package under the name dice

let SIDES = 6 // Were using six sided dies
let ROLLS = 1 // And rolling once

throwDice = dice(ROLLS,SIDES) // Throws a six sided die one time

console.log("Threw a " + ROLLS + "d" + " SIDES" + "and received" + throwDice.total);
```

### Usage
```
dice = require("xdicey");

variable = dice(x,y);
```

`x` is the amount of times the die should be thrown. `y` is the amount of sides the die has.

The module will return a collection. The keys in the collection are total, which is the sum of all dice thrown and individual which is an array containing the individual results.