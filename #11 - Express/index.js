const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000);
app.get('/', (req,res) => {
    res.render('index', {heading: "That's my first Node.js Web Page"});
});
app.get('/news/:id', (req, res) => {
    res.render('news', {newsId: req.params.id});
});