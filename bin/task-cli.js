#!/usr/bin/env node

const addTask = require("../commands/add");
const deleteTask = require("../commands/delete");
const updateTask = require("../commands/update")
const listAllTasks = require("../commands/list_all_tasks");

const command = process.argv.slice(2);
const action = command[0];
// const id = command[1];
// const task = command[2]
// const type = command[2];
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
        listAllTasks(command[1]);
        break;
    case "mark-in-progress" :
    case "mark-done" : 

}
