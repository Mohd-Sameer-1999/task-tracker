const fs = require("fs");
async function updateTask(id = '', task = '', status = ''){
    if(!id) 
        console.log('Provide filename to update the task')

    let todo = {}
    let file;
     
    if(task){
        fs.readFile(`./tasks/${id}.json`, "utf8", (error, data) => {
            if(error)
                throw error;
            
            todo = {...JSON.parse(data), description: task, updatedAt: new Date()}
    
            fs.writeFile(`tasks/${todo.id}.json`, JSON.stringify(todo), (error) => {
                if(error) 
                    throw error;
            })
        })
    } else if (status) {
        fs.readFile(`./tasks/${id}.json`, "utf8", (error, data) => {
            if(error)
                throw error;
            
            todo = {...JSON.parse(data), status: status, updatedAt: new Date()}
    
            fs.writeFile(`tasks/${todo.id}.json`, JSON.stringify(todo), (error) => {
                if(error) 
                    throw error;
            })
        })
    }
    
    
}

module.exports = updateTask;