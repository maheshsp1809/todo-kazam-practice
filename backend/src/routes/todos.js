const express = require("express");
const { PrismaClient } = require("@prisma/client");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();
const prisma = new PrismaClient();

router.use(authenticateToken);

router.get("/", async (req, res) => {
  try {
    const todos = await prisma.todo.findMany({
      where: { userId: req.user.userId },
    });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Error fetching todos" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await prisma.todo.create({
      data: {
        title,
        description,
        userId: req.user.userId,
      },
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Error creating todo" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const todo = await prisma.todo.update({
      where: { id: parseInt(id) },
      data: { title, description, completed },
    });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Error updating todo" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Error deleting todo" });
  }
});

module.exports = router;
