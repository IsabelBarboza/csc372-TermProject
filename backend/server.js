require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const tasksRoutes = require("./routes/tasks");


const app = express();

app.use(cors({
  origin: "https://studysync-o7gdjl5ar-isabelbarbozas-projects.vercel.app/"
}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Study sync API");
});



app.use("/tasks", tasksRoutes);
app.use("/", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => {
    console.log("Server running on port "+ PORT);
});



