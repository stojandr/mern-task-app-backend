const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
  updateTaskPatch,
} = require("../controllers/taskController");

router.route("/").get(getTasks).post(createTask);
router
  .route("/:id")
  .get(getTask)
  .delete(deleteTask)
  .put(updateTask)
  .patch(updateTaskPatch);

// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);
// router.patch("/:id", updateTaskPatch);

module.exports = router;
