function updateTask(id = '', task){
    if(!id) 
        console.log('Provide filename to update the task')

    const fs = require("fs");
    let todo = {}
    fs.readFile(`./tasks/${id}.json`, "utf8", (error, data) => {
        if(error)
            throw error;
        
        todo = {...JSON.parse(data), description: task, updatedAt: new Date()}

        fs.writeFile(`tasks/${todo.id}.json`, JSON.stringify(todo), (error) => {
            if(error) 
                throw error;
        })
    })
    
}

module.exports = updateTask;