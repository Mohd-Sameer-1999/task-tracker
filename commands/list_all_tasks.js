function listAllTasks(type = ''){
    const fs = require("fs")
    console.log(type);
    if(!type) {
        fs.access('./tasks/', fs.constants.F_OK, (err) => {
            if (err) {
              throw err;
            }
            fs.readdir(`./tasks`, (error, files) => {
                if(error)
                    throw error;
                
                console.log(files)
            })
        });
       
    } else {
        fs.access(`./tasks/`, fs.constants.F_OK, (err) => {
            if (err) {
              throw err;
            }
            fs.readdir(`./tasks`, (error, files) => {
                if(error)
                    throw error;
                
                let result = []
                for(let i = 0; i < files.length; i++){
                    fs.readFile(`./tasks/${files[i]}`, (error, data) => {
                        if(error)
                            throw error;

                        let jsonData = JSON.parse(data);
                        console.log(jsonData);
                        if(jsonData.status === type){
                            result.push(files[i]);
                        }
                    })
                }
                console.log(result);
               
            })
        });
    }
}

module.exports = listAllTasks;