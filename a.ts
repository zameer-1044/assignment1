
import inquirer from "inquirer"
import chalk from "chalk";

async function calculator() {
    let firstNumber: any = (await inquirer.prompt({
        name: "firstNumber",
        type: "input",
        message:chalk.blueBright.italic( "Enter your first number :")
    })).firstNumber;

    let operators = (await inquirer.prompt({
        name: "operators",
        type: "list",
        choices: [
            "+",
            "-",
            "*",
            "/"
        ],
        message:chalk.yellowBright.italic( "Select your operator")
    })).operators;


    let secondNumber: any = (await inquirer.prompt({
        name: "secondNumber",
        type: "input",
        message:chalk.greenBright.italic( "Enter your second number")
    })).secondNumber;

    firstNumber = +firstNumber
    secondNumber = +secondNumber


    if (operators === "+") {
        console.log(chalk.magentaBright.bold(`Addition of ${firstNumber} and ${secondNumber} is :`,firstNumber + secondNumber))
    } else if (operators === "-") {
        console.log(chalk.redBright.bold(`Subtraction of ${firstNumber} and ${secondNumber} is :`,firstNumber - secondNumber))
    }
    else if (operators === "*") {
        console.log(chalk.yellowBright.bold(`Multiplication of ${firstNumber} and ${secondNumber} is :`,firstNumber * secondNumber))
    }
    else if (operators === "/") {
        console.log(chalk.bgGreen.yellow.bold(`Division of ${firstNumber} and ${secondNumber} is :`,firstNumber / secondNumber))
    }


}
calculator()