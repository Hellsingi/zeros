module.exports = function zeros(expression) {
  // your solution
  let exp = expression;
  let arrExp = exp.split("*");
  let countOneFact;
  let countTwoOddFact;
  let countTwoEvenFact;
  let countZero = 0;
  let countZeroFive = 0;
  let countZeroTwo = 0;
  let arrCountEnd = [0, 0];
  arrExp.forEach(element => {
    let countFact = element.indexOf("!!");
    if (countFact > 0) {
      let arrNum = element.split("!!");
      let numTwo = arrNum[0];

      if (numTwo % 2 === 0) {
        arrCountEnd = EvenFactorialDouble(numTwo);
      } else {
        arrCountEnd = OddFactorialDouble(numTwo);
      }
    } else {
      let arrNum = element.split("!");
      let numOne = arrNum[0];
      arrCountEnd = oneFactorial(numOne);
    }
    countZeroFive = countZeroFive + arrCountEnd[0]; // ???????????????????
    countZeroTwo = countZeroTwo + arrCountEnd[1]; // ???????????????????

    if (countZeroFive < countZeroTwo) {
      countZero = countZeroFive;
    } else {
      countZero = countZeroTwo;
    }
  });
  return countZero;
};

function oneFactorial(num) {
  let degTwo = 0;
  let degFive = 0;
  let integerTwo = 1;
  let integerFive = 1;
  let countTwo = 0;
  let countFive = 0;
  let arrCount = [0, 0];

  // for 5
  while (integerFive >= 1) {
    degFive++;
    integerFive = Math.floor(num / Math.pow(5, degFive));
    countFive = countFive + integerFive;
  }

  // for 2
  while (integerTwo >= 1) {
    degTwo++;
    integerTwo = Math.floor(num / Math.pow(2, degTwo));
    countTwo = countTwo + integerTwo;
  }

  arrCount[0] = countFive;
  arrCount[1] = countTwo;

  return arrCount;
}

function OddFactorialDouble(num) {
  let degTwo = 0; //степень для 2
  let degFive = 0; //степень для 5
  let degTen = 0;
  let integerTwo = 1; // для 5
  let integerFive = 1; //для 2
  let integerTen = 1;
  let countTwo = 0;
  let countFive = 0;
  let countTen = 0;
  let arrCount = [0, 0];

  while (integerTen >= 1) {
    degTen++;
    integerTen = Math.floor(num / (2 * Math.pow(5, degTen)));
    countTen = countTen + integerTen;
  }
  // для 5
  while (integerFive >= 1) {
    degFive++;
    integerFive = Math.floor(num / Math.pow(5, degFive));
    countFive = countFive + integerFive;
  }
  // для 2
  //   while (integerTwo >= 1) {
  //     degTwo++;
  //     integerTwo = Math.floor(num / Math.pow(2, degTwo));
  //     countTwo = countTwo + integerTwo;
  //   }

  arrCount[0] = countFive - countTen;
  arrCount[1] = countTwo;
  return arrCount;
}

function EvenFactorialDouble(num) {
  let degchet = 0; //степень для 2
  let deg = 0; //степень для 5
  let n = 1; // для 5
  let d = 1; //для 2
  let counttwo = 0;
  let countfive = 0;
  let arrCount = [0, 0];
  // для 5
  while (n >= 1) {
    deg++;
    n = Math.floor(num / (2 * Math.pow(5, deg)));
    countfive = countfive + n;
  }
  // для 2
  while (d >= 1) {
    degchet++;
    d = Math.floor(num / Math.pow(2, degchet));
    counttwo = counttwo + d;
  }

  arrCount[0] = countfive;
  arrCount[1] = counttwo;
  return arrCount;
}
