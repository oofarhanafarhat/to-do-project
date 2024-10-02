#!/usr/bin/env node
import inquirer from "inquirer";
async function main() {
    let todos = [];
    let condition = true;
    while (condition) {
        try {
            let addtask = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: "What do you want to add to your Todos?",
                },
                {
                    name: "addmore",
                    type: "confirm",
                    message: "Do you want to add more?",
                    default: false,
                },
            ]);
            todos.push(addtask.todo);
            console.log(`Added: ${addtask.todo}`);
            // Print the todos list
            console.log("\nTodos:");
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i + 1}. ${todos[i]}`);
            }
            if (!addtask.addmore) {
                condition = false;
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    }
}
main();
