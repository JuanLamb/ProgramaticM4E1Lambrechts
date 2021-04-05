const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});


app.listen(port || 3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});
