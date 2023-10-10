const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('This line is always called');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

app.get('/students', (req, res, next) => {
    const students = [ 
        { "id": "1", "firstName": "John", "lastName": "Dow" }, 
        { "id": "2", "firstName": "Ann", "lastName": "Smith" }, 
        { "id": "3", "firstName": "Joan", "lastName": "Doe" }
    ];
    res.json(students);
});

module.exports = app;
