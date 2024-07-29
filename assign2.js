// MadhuraChitale DB_UI_Assignment2

// task 1
function cubeNumbers(numbers) {
  return numbers.map((num) => num ** 3);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7];

// const cubesArray = cubeNumbers(numbersArray);
// console.log(cubesArray);

// task 2
function sumArray(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// const sum = sumArray(numbersArray);
// console.log(sum);

// task 3 - filter to find prime nos

function filterPrimes(numbers) {
  return numbers.filter((num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
}

// const primesArray = filterPrimes(numbersArray);
// console.log(primesArray);

// task 4

function averageOfSquaredOdds(numbers) {
  const oddNumbers = numbers.filter((num) => num % 2 !== 0);

  const squaredOddNumbers = oddNumbers.map((num) => num ** 2);

  const sumOfSquares = squaredOddNumbers.reduce((sum, num) => sum + num, 0);

  const average =
    squaredOddNumbers.length > 0 ? sumOfSquares / squaredOddNumbers.length : 0;

  return average;
}

// const average = averageOfSquaredOdds(numbersArray);
// console.log(average);

// task 5

function findLongestString(strings) {
  //  Filter out any empty strings
  const nonEmptyStrings = strings.filter((str) => str.length > 0);

  // Map the strings to their lengths
  const lengths = nonEmptyStrings.map((str) => str.length);

  // find max
  const maxLength = lengths.reduce(
    (max, current) => (current > max ? current : max),
    0
  );

  const longestStrings = nonEmptyStrings.filter(
    (str) => str.length === maxLength
  );

  // Assuming there could be multiple longest strings, return the first one
  return longestStrings.length > 0 ? longestStrings[0] : "";
}

// const stringsArray = ["apple", "banana", "cherry", "blueberry", "grapefruit"];
// const longestString = findLongestString(stringsArray);
// console.log(longestString);

// task 6

function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// const sentence = "i like apples";
// const capitalizedSentence = capitalizeFirstLetter(sentence);
// console.log(capitalizedSentence);

// task 7

function findPassingStudents(students) {
  return students.filter((student) => student.score >= 60);
}

const studentsArray = [
  { name: "Anne", score: 58 },
  { name: "Bob", score: 72 },
  { name: "CJack", score: 85 },
  { name: "Dave", score: 45 },
  { name: "Eve", score: 90 },
];

// const passingStudents = findPassingStudents(studentsArray);
// console.log(passingStudents);

// task 8

function createInstanceCounter() {
  let count = 0; // Private

  return function () {
    count += 1;
    return count;
  };
}

// const counter1 = createInstanceCounter();
// const counter2 = createInstanceCounter();

// console.log(counter1()); // Output: 1
// console.log(counter1()); // Output: 2
// console.log(counter2()); // Output: 1
// console.log(counter2());

// task 9

function calculator(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    switch (operation) {
      case "addition":
        resolve(num1 + num2);
        break;
      case "subtraction":
        resolve(num1 - num2);
        break;
      case "multiplication":
        resolve(num1 * num2);
        break;
      case "division":
        if (num2 === 0) {
          reject(new Error("Division by zero is not allowed"));
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject(new Error("Invalid operation"));
        break;
    }
  });
}

calculator(10, 5, "addition")
  .then((result) => console.log("Result:", result)) // Output: Result: 15
  .catch((error) => console.error("Error:", error.message));

calculator(10, 0, "division")
  .then((result) => console.log("Result:", result))
  .catch((error) => console.error("Error:", error.message)); // Output: Error: Division by zero is not allowed

calculator(10, 5, "unknown")
  .then((result) => console.log("Result:", result))
  .catch((error) => console.error("Error:", error.message)); // Output: Error: Invalid operation

// task 10
function calculateTotalScore(objectsArray) {
  let totalScore = 0; // Initialize total score

  objectsArray.forEach((obj) => {
    totalScore += obj.score; // Accumulate the score
  });

  return totalScore; // Return the total score
}

const scoresArray = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 90 },
  { name: "Charlie", score: 78 },
];

const totalScore = calculateTotalScore(scoresArray);
console.log(totalScore);
