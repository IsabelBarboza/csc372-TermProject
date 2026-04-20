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

app.get("/tasks/:userId",async(req,res)=>{
    const {userId}=req.params;
    const result =await db.query("SELECT * FROM tasks WHERE user_id=$1",[userId]);
    res.json(result.rows);
});

app.post("/tasks",async(req,res)=>{
    const {title,userId} =req.body;
    const result = await db.query("INSERT INTO tasks (title,completed,user_id) VALUES ($1,false,$2) RETURNING *", 
        [title,userId]
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

app.post("/register", async(req,res)=>{
const {user,pass} =req.body;
    try {
        await db.query("INSERT INTO users(username, password) VALUES ($1,$2)",[user,pass]);
        res.json({message:"User created"});
    } catch (err){
        res.status(400).json({error:"User exists"});
    }
    });

app.post("/login", async (req,res) => {
    try{
    const { user,pass } = req.body;
        console.log("Body",req.body);
    const result = await db.query("SELECT * FROM users WHERE username=$1",[user]);
     
    const dbUser = result.rows[0];
    if (!dbUser) {
        return res.status(400).json({error:"User not found"});
    } 
    
    if (dbUser.password !== pass) {
        return res.status(400).json({error:"Wrong pass"});
    } 
        res.json({userId:dbUser.id, username:dbUser.username});
    } catch (err) {
        console.error(err);
        res.status(500).json({error:"Server error"});
    }
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log("Server running on port "+PORT);
});



