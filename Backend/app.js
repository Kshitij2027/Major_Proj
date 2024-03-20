const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

// get request for homepage

// app.get("/", (req, res)=>{
//     res.send("Hii , I am Live!");
// })

// 
const start = async ()=>{
    try {
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes I am Connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();