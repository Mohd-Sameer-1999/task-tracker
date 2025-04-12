const fs = require("fs").promises;
async function listAllTasks(type = ''){
    try{
        try{
            await fs.access("./tasks");
    
        } catch(error) {
            console.error("task directory not found - ", error);
            return;
        }
    
        const files = await fs.readdir("./tasks")
    
        if(!type) { 
            console.log(files);
        }
    
        let result = [];
        const fileProcessingPromises = files.map(async (file) => {
            try{
                const data = await fs.readFile(`./tasks/${file}`, "utf8");
                const task = JSON.parse(data);
                if(task.status === type){
                    result.push(file);
                }
            } catch(error) {
                console.error(error);
            }
        })
    
        await Promise.all(fileProcessingPromises);

        return result;

    } catch (error) {
        console.error(error);
    }

}

module.exports = listAllTasks;