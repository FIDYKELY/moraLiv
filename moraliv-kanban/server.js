const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'data', 'tasks.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function readTasks() {
  if (!fs.existsSync(DB_FILE)) return [];
  const raw = fs.readFileSync(DB_FILE, 'utf-8');
  return raw.trim() ? JSON.parse(raw) : [];
}

function writeTasks(tasks) {
  fs.writeFileSync(DB_FILE, JSON.stringify(tasks, null, 2), 'utf-8');
}

function uid() {
  return 't' + Math.random().toString(36).slice(2, 10);
}

// GET all tasks
app.get('/api/tasks', (req, res) => {
  res.json(readTasks());
});

// POST a new task
app.post('/api/tasks', (req, res) => {
  const { title, sprint, prio } = req.body;
  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'Le titre est requis.' });
  }
  const tasks = readTasks();
  const task = {
    id: uid(),
    title: title.trim(),
    sprint: sprint || 'Sprint 1',
    prio: prio || 'moyenne',
    col: 'backlog',
    createdAt: new Date().toISOString()
  };
  tasks.push(task);
  writeTasks(tasks);
  res.status(201).json(task);
});

// PATCH an existing task (e.g. move column, edit fields)
app.patch('/api/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Tâche introuvable.' });
  const { title, sprint, prio, col } = req.body;
  if (title !== undefined) task.title = title;
  if (sprint !== undefined) task.sprint = sprint;
  if (prio !== undefined) task.prio = prio;
  if (col !== undefined) task.col = col;
  writeTasks(tasks);
  res.json(task);
});

// DELETE a task
app.delete('/api/tasks/:id', (req, res) => {
  let tasks = readTasks();
  const before = tasks.length;
  tasks = tasks.filter(t => t.id !== req.params.id);
  if (tasks.length === before) return res.status(404).json({ error: 'Tâche introuvable.' });
  writeTasks(tasks);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`MoraLiv Kanban en ligne : http://localhost:${PORT}`);
});
