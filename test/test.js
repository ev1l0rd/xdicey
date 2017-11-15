var expect = require("chai").expect;
var xdicey = require("../index.js");

describe("throwDice", function () {
	describe("#throw1d6", function () {
		it("should return between 1 and 6", function () {
			var result = xdicey(1, 6);
			expect(result).to.be.within(1, 6);
		});
	});
	describe("#throw2d4", function () {
		it("should return between 2 and 8", function () {
			var result = xdicey(2, 4);
			expect(result).to.be.within(2, 8);
		})
	});
	describe("#throw4d20", function () {
		it("should return between 4 and 80", function () {
			var result = xdicey(4, 20);
			expect(result).to.be.within(4, 80);
		})
	});
});