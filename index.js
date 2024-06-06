#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("*************************");
console.log(chalk.yellow("Welcome to the number guessing game!"));
console.log("*************************\n");
async function more() {
    let continuePlaying = true;
    while (continuePlaying) {
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        const answers = await inquirer.prompt([
            {
                name: "userGuessedNumber",
                type: "number",
                message: chalk.greenBright(chalk.italic("Please guess a number between 1-6")),
                validate: (input) => {
                    if (input < 1 || input > 6) {
                        return chalk.red("Please enter a number between 1 and 6.");
                    }
                    return true;
                },
            },
        ]);
        if (answers.userGuessedNumber === randomNumber) {
            console.log(chalk.bold(chalk.blue("Congratulations! You guessed the right number.")));
        }
        else {
            console.log(chalk.red("You guessed the wrong number."));
        }
        const { confirm } = await inquirer.prompt({
            name: "confirm",
            type: "confirm",
            message: chalk.cyanBright("Do you want to play again?"),
            default: false,
        });
        continuePlaying = confirm;
    }
    console.log(chalk.yellow("Thank you for playing!"));
}
more();
