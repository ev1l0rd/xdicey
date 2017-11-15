/*
*   xdicey - Throw an x sided dice y amount of times
    Copyright (C) 2017 Valentijn "ev1l0rd" <contact@ev1l0rd.info>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
* /
/*
 * Throws an x sided dice y amount of times
 * @param y Amount of times to throw the dice
 * @param x Amount of sides the dice has
 * @return A collection. The collection contains a total key and a individual key. The total key is the sum of all dice
 * thrown and the individual key is an array with the results of each individual die.
 */
module.exports = function(y, x) {
	let amountOfRolls = Math.abs(y);
	let amountOfSides = Math.abs(x);
	if (amountOfSides === 0) return "You tried to throw a 0 sided die. 0 sided dies do not exist.";
	if (amountOfRolls === 0) return "You are rolling 0 times. That is not possible.";

	let totalAmount;
	let result = [];
	for (let i = 1; i <= amountOfRolls; i++) {
		let arrayVal = i - 1;
		let min = Math.ceil(1);
		let max = Math.floor(amountOfSides);
		result[arrayVal] = Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Taken from https://stackoverflow.com/a/16751601/4666756
	totalAmount = result.reduce(add, 0);
	// Taken from https://stackoverflow.com/a/16751601/4666756
	/*
	 * Fancifies reduce in totalAmount a bit for more readable code.
	 * @param a The existing amount.
	 * @param b The amount to add.
	 * @return The new amount.
	 */
	function add(a, b) {
		return a + b;
	}

	return {
		individual: result,
		total: totalAmount
	};
};