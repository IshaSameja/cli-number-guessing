import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 100);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-100: ",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congrtulation! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
