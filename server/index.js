const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next) => {
    console.log('req.path', req.path);
    const file = path.join(__dirname, '../public', req.path);
    console.log('file', file);
    res.sendFile(file);
    //next();
})

//app.use(express.static('../public'));

app.listen(3001, () => {
    console.log('Servindo na porta 3001')
})