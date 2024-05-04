const fstream =require("fs");
fstream.writeFile("file.txt","I am Malligarjun From Department of Artificial Intelligence",(error)=>{
    if (error) throw error;
    console.log("file success");
})

fstream.readFile("file.txt","utf-8",(error,data)=>{
    if (error){
       throw error;
    }
    console.log(data);
})