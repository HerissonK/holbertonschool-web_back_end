const PORT = 1245;
const HOST = '127.0.0.1';
const express = require('express');
const { AppController } = require('./controllers/AppController');
const { StudentsController } = require('./controllers/StudentsController');
const { StudentsService } = require('./services/StudentsService');

const app = express();
const studentsService = new StudentsService();
const studentsController = new StudentsController(studentsService);

app.get('/', AppController.getHomepage);
app.get('/students', (req, res) => studentsController.getAllStudents(req, res));
app.get('/students/:major', (req, res) => studentsController.getStudentsByMajor(req, res));
app.listen(PORT, HOST);

module.exports = app;
