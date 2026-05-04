const db = require("../db")
const bcrypt = require("bcrypt");


exports.register = async (req, res) => {
    const { user, pass } = req.body;
if (!user || !pass) {
    return res.status(400).json({ error: "Missing fields" });
  }


   try {
    const hashed = await bcrypt.hash(pass, 10);

    await db.query(
      "INSERT INTO users(username, password) VALUES ($1,$2)",
      [user, hashed]
    );
        
        res.json({message:"User created"});
    } catch (err){
        console.error(err);
        res.status(500).json({error:"Database error"});

    }
    };

exports.login = async (req, res) => {
  const { user, pass } = req.body;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE username=$1",
      [user.trim()]
    );
    const dbUser = result.rows[0];
    if (!dbUser) {
      return res.status(400).json({ error: "User not found" });
    }
        let valid = false;
        if (dbUser.password.startsWith("$2b$")) {
        valid = await bcrypt.compare(pass, dbUser.password);
        } 
        else {
        valid = pass === dbUser.password;
        if (valid) {
            const hashed = await bcrypt.hash(pass, 10);
            await db.query(
            "UPDATE users SET password=$1 WHERE id=$2",
            [hashed, dbUser.id]
            );
        }
        }
        if (!valid) {
        return res.status(400).json({ error: "Wrong pass" });
        }
    res.json({ userId: dbUser.id, username: dbUser.username });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};