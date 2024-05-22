#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.greenBright(chalk.italic("please guess a number between 1-6"))
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.bold(chalk.blue("Congratulations! you guessed right number.")));
}
else {
    console.log(chalk.red("You guessed wrong number."));
}
;
