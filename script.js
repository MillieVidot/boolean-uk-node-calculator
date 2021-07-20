const input = process.argv
const firstNum = Number(input[2])
const operator = input[3]
const secondNum = Number(input[4])

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

console.log("your result is:", calculator(firstNum, operator, secondNum))
