import express from "express";

const app = express();

app.get("/api/health", (req,res)=>{
    res.status(200).json({message:"Success"})
})

app.listen(5000, ()=>{
    console.log("app is up and running on port 5000")
})