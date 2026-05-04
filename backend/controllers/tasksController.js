const db = require("../db")

exports.getTasks = async(req,res)=>{
    const {userId}=req.params;
    const result =await db.query("SELECT * FROM tasks WHERE user_id=$1",[userId]);
    res.json(result.rows);
};

exports.createTask = async (req, res) => {
  const { title, description, category, dueDate, userId } = req.body;

  const result = await db.query(
    `INSERT INTO tasks 
    (title, description, category, due_date, completed, user_id)
    VALUES ($1, $2, $3, $4, false, $5)
    RETURNING *`,
    [title, description, category, dueDate, userId]
  );

  res.status(201).json(result.rows[0]);
};

exports.updateTask = async(req,res)=>{
    const {id} =req.params;
    const {completed} =req.body;
    const result =await db.query("UPDATE tasks SET completed=$1 WHERE id=$2 RETURNING *", 
        [completed,id]
    );
    res.json(result.rows[0]);
};

exports.deleteTask = async(req,res)=>{
    const {id} =req.params;
    await db.query("DELETE FROM tasks WHERE id=$1",[id]);
    res.json({message:"deleted"});
};

exports.shareTask = async (req, res) => {
  const { id } = req.params;
  const sharedWith = Number(req.body.sharedWith);
  if (!sharedWith) {
    return res.status(400).json({ error: "Missing shared user" });
  }

  const result = await db.query(
    "UPDATE tasks SET shared_with=$1 WHERE id=$2 RETURNING *", [sharedWith, id]
  );
  res.json(result.rows[0]);
};

exports.getSharedTasks = async (req, res) => {
  const { userId } = req.params;
   const result = await db.query(`
    SELECT tasks.*, users.username
    FROM tasks
    JOIN users ON tasks.user_id = users.id
    WHERE tasks.shared_with = $1
  `, [userId]);

  res.json(result.rows);
};