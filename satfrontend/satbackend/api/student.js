const express = require('express');
const router = express.Router();
const studentData = require('../models/studentModel');

router.get('/', (request, response) => {
    studentData.find()
    .then(students => {response.json(students)})
    .catch(err => {resquest.json(err)})
})

router.post('/create', (request, response) => {
    const createdStudent = new studentData({
    username: request.body.username
    })

    createdStudent.save()
    .then(data => {response.json(data)})
    .catch(err => {response.json(err)})
});

module.exports = router;