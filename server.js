const express = require("express");
const cors = require("cors");
require('dotenv').config();

const db = require("./db")
const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Study sync API");
});

app.get("/tasks",async(req,res)=>{
    const result =await db.query("SELECT * FROM tasks ORDER BY id DESC");
    res.json(result.rows);
});

app.post("/tasks",async(req,res)=>{
    const {title} =req.body;
    const result =await db.query("INSERT INTO tasks (title) VALUES ($1) RETURNING *", 
        [title]
    );
    res.status(201).json(result.rows[0]);
});

app.put("/tasks/:id",async(req,res)=>{
    const {id} =req.params;
    const {completed} =req.body;
    const result =await db.query("UPDATE tasks SET completed=$1 WHERE id=$2 RETURNING *", 
        [completed,id]
    );
    res.json(result.rows[0]);
});

app.delete("/tasks/:id",async(req,res)=>{
    const {id} =req.params;
    await db.query("DELETE FROM tasks WHERE id=$1",[id]);
    res.json({message:"deleted"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log("Server running on port "+PORT);
});



