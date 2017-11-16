let expect = require("chai").expect;
let xdicey = require("../index.js");

describe("throwDice", function () {
	describe("total", function () {
		describe("#throw1d6", function () {
			it("should return between 1 and 6", function () {
				let result = xdicey(1, 6).total;
				expect(result).to.be.within(1, 6);
			});
		});
		describe("#throw2d4", function () {
			it("should return between 2 and 8", function () {
				let result = xdicey(2, 4).total;
				expect(result).to.be.within(2, 8);
			})
		});
		describe("#throw4d20", function () {
			it("should return between 4 and 80", function () {
				let result = xdicey(4, 20).total;
				expect(result).to.be.within(4, 80);
			})
		});
		describe("#throwNegative1d6", function () {
			it("should not return anything", function () {
				let result = xdicey(1, 6).total;
				expect(result).to.be.within(1, 6);
			})
		})
	});
	describe("individual", function () {
		describe("#throw1d6", function () {
			it("should return an array of 1 value", function () {
				let result = xdicey(1, 6).individual;
				expect(result).to.be.an("array").and.to.have.lengthOf(1);
			})
		});
		describe("#throw2d4", function () {
			it("should return an array of 2 values", function () {
				let result = xdicey(2, 4).individual;
				expect(result).to.be.an("array").and.to.have.lengthOf(2);
			})
		});
		describe("#throw4d20", function () {
			it("should return an array of 40 values", function () {
				let result = xdicey(40, 20).individual;
				expect(result).to.be.an("array").and.to.have.lengthOf(40);
			})
		});
	});
	describe("throw0", function () {
		describe("#throw0times", function () {
			it("should return a message stating that rolling zero times is impossible.", function () {
				let result = xdicey(0, 20);
				expect(result).to.be.a("string").and.to.be.equal("You are rolling 0 times. That is not possible.");
			})
		});
		describe("#0sided", function () {
			it("should return a message stating that zero sided dies do not exist.", function () {
				let result = xdicey(20, 0);
				expect(result).to.be.a("string").and.to.be.equal("You tried to throw a 0 sided die. 0 sided dies do not exist.");
			})
		})
	})
});