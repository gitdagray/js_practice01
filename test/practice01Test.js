const assert = chai.assert;

describe("Practice Assignment 1", function () {
  describe("Question 1", function () {
    it("The variable myNumber should by defined.", function () {
      assert.isNotNull(myNumber);
    });
  });
  describe("Question 2", function () {
    it("The variable myNumber should be type number.", function () {
      assert.isNumber(myNumber);
    });
    it("The variable myNumber should be equal to 5.", function () {
      assert.equal(myNumber, 5);
    });
  });
  describe("Question 3", function () {
    it("The variable myOtherNumber should by defined.", function () {
      assert.isDefined(myOtherNumber);
    });
    it("The variable myOtherNumber should be type number.", function () {
      assert.isNumber(myOtherNumber);
    });
    it("The variable myOtherNumber should be equal to 5.", function () {
      assert.equal(myOtherNumber, 10);
    });
  });
  describe("Question 4", function () {
    it("The variable myTotal should by defined.", function () {
      assert.isDefined(myTotal);
    });
    it("The variable myTotal should be type number.", function () {
      assert.isNumber(myTotal);
    });
    it("The variable myTotal should be equal to the product of myNumber and myOtherNumber.", function () {
      assert.equal(myTotal, myNumber * myOtherNumber);
    });
  });
  describe("Question 5", function () {
    it("The variable myName should by defined.", function () {
      assert.isDefined(myName);
    });
    it("The variable myName should be type string.", function () {
      assert.isString(myName);
    });
    it("The variable myCombo should by defined.", function () {
      assert.isDefined(myCombo);
    });
    it("The variable myCombo should be type string.", function () {
      assert.isString(myCombo);
    });
    it("The variable myCombo should be equal to the sum of myNumber and myOtherNumber.", function () {
      assert.equal(myCombo, myName + myNumber);
    });
  });
  describe("Question 6", function () {
    it("The variable myOtherCombo should by defined.", function () {
      assert.isDefined(myOtherCombo);
    });
    it("The variable myOtherCombo should be type number.", function () {
      assert.isNumber(myOtherCombo);
    });
    it("The variable myOtherCombo should be equal to the sum of myNumber and myOtherNumber.", function () {
      assert.equal(myOtherCombo, myNumber + 8);
    });
  });
  describe("Question 7", function () {
    it("The variable myRemainder should by defined.", function () {
      assert.isDefined(myRemainder);
    });
    it("The variable myRemainder should be type number.", function () {
      assert.isNumber(myRemainder);
    });
    it("The variable myRemainder should be equal to the remainder of myNumber divided by 5.", function () {
      assert.equal(myRemainder, myNumber % 5);
    });
  });
  describe("Question 8", function () {
    it("The variable i should by defined.", function () {
      assert.isDefined(i);
    });
    it("The variable i should be type number.", function () {
      assert.isNumber(i);
    });
    it("The variable i should be equal to 2.", function () {
      assert.equal(i, 2);
    });
  });
  describe("Question 9", function () {
    it("The variable int should by defined.", function () {
      assert.isDefined(int);
    });
    it("The variable int should be type number.", function () {
      assert.isNumber(int);
    });
    it("The variable int should be equal to 4.", function () {
      assert.equal(int, 4);
    });
  });
  describe("Question 10", function () {
    it("The variable myBoolean should by defined.", function () {
      assert.isDefined(myBoolean);
    });
    it("The variable myBoolean should be type boolean.", function () {
      assert.isBoolean(myBoolean);
    });
    it("The variable myBoolean should be false.", function () {
      assert.equal(myBoolean, false);
    });
  });
});
