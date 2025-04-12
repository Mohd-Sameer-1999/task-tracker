#!/usr/bin/env node

const addTask = require("../commands/add");
const deleteTask = require("../commands/delete");
const updateTask = require("../commands/update")
const listAllTasks = require("../commands/list_all_tasks");

async function main(){
    const command = process.argv.slice(2);
    const action = command[0];

    if(!action){
        console.log("start adding notes!!");
    }

    switch(action){
        case "add" : 
            addTask(command[1]); 
            break;
        case "update" : 
            updateTask(command[1], command[2]);
            break;
        case "delete" : 
            deleteTask(command[1]); 
            break;
        case "list" : 
            const tasks = await listAllTasks(command[1]);
            console.log(tasks);
            break;
        case "mark-in-progress" :
            updateTask(command[1], "", "in-progress");
            break;
        case "mark-done" : 
            updateTask(command[1], "", "done");
            break;

    }
}

main().catch(err => {
    console.error("Error - ", err);
    process.exit(1);
})

