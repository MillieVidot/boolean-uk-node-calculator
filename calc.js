const input = process.argv

// const firstNum = Number(input[2])
// const operator = input[3]
// const secondNum = Number(input[4])

// use existing array and mutate
// if any indices have "/" take that index and both its neighbours into a new array and push inside original array

const newInput = input.slice(2)
console.log("this is the newInput array", newInput)

let divIndex = newInput.indexOf("/")
let divArray = newInput.splice(divIndex - 1, divIndex + 2)
console.log("this is divArray", divArray)
console.log("remainging newInput array", newInput)

// let multipyIndex = numbersArrayCalc.indexOf("*");
// let multipyArray = numbersArrayCalc.splice(divIndex -1, divIndex +2)

// let addIndex = numbersArrayCalc.indexOf("+");
// let addArray = numbersArrayCalc.splice(divIndex -1, divIndex +2)

// let subtractIndex = numbersArrayCalc.indexOf("/");
// let subtractArray = numbersArrayCalc.splice(divIndex -1, divIndex +2)

const firstNum = Number(divArray[0])
const operator = divArray[1]
const secondNum = Number(divArray[2])

// if (isNaN(firstNum) || (isNaN(firstNum) || !operators.includes(operator))

function calculator(firstNum, operator, secondNum) {
  let result = 0
  if (operator === "add" || operator === "+") {
    result = firstNum + secondNum
  } else if (operator === "minus" || operator === "-") {
    result = firstNum - secondNum
  } else if (
    operator === "divided" ||
    operator === "divide" ||
    operator === "/"
  ) {
    result = firstNum / secondNum
  } else if (
    operator === "times" ||
    operator === "multiply" ||
    operator === "*"
  ) {
    result = firstNum * secondNum
  }

  return result
}
let newSum = calculator(firstNum, operator, secondNum)
newInput.unshift(newSum)
console.log("your 1st newsum result is:", newInput)

const firstNum2 = Number(newInput[0])
const operator2 = newInput[1]
const secondNum2 = Number(newInput[2])

console.log(
  "your final result is:",
  calculator(firstNum2, operator2, secondNum2)
)

// console.log("your result is:", calculator(firstNum, operator, secondNum))
