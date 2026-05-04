const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");


router.post("/", tasksController.createTask);
router.put("/:id", tasksController.updateTask);
router.delete("/:id", tasksController.deleteTask);
router.put("/share/:id", tasksController.shareTask);
router.get("/shared/:userId", tasksController.getSharedTasks);
router.get("/:userId", tasksController.getTasks);

module.exports = router;