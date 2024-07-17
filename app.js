const express = require('express');
const path = require('path');
const myApp = express(); 
const port = 3000; 

myApp.use('/static', express.static(path.join(__dirname, 'static')));

myApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

myApp.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});