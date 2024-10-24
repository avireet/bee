const express = require('express');
const app = express();

app.set('view engine', 'ejs');

let isLoggedIn = true; 
const username = 'John Doe';

app.get('/', (req, res) => {
    res.render('index', { isLoggedIn, username });
});

app.get('/login', (req, res) => {
    isLoggedIn = true;
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    isLoggedIn = false; 
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
