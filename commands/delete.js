function deleteTask(id = ''){
    if(!id) {
        throw new Error("For deleting a file you need to provide file name");
    }
    const fs = require("fs");
    fs.unlink(`./tasks/${id}.json`, (error) => {
        if (error) throw error;
    })
}

module.exports = deleteTask;