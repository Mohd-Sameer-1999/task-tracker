async function addTask(task = "") {
    const {nanoid} = await import('nanoid');
    const fs = require("fs");
    const id = nanoid();
    const data = {
        id: id,
        description: task,
        status: "todo",
        createdAt: new Date(),
        updatedAt: new Date()
    }
    fs.access('./tasks/', fs.constants.F_OK, (err) => {
        if (err) {
          fs.mkdir('./tasks', { recursive: true }, (err) => {
            if (err) 
                throw err;
          });

        }
        fs.writeFile(`./tasks/${id}.json`, JSON.stringify(data), (error) => {
            if(error) throw error;
        })
    });
    
}

module.exports = addTask;