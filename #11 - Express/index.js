const express = require('express');
const app = express();

const user = {
    email: "",
    password: ""
};
let login_failed = false;
const admin = {
    email: "admin@gmail.com",
    password: "12345"
};
app.set('view engine', 'ejs');
app.listen(3000);
app.use('/source', express.static('source'));

app.use(express.urlencoded());
app.use(express.json());
app.post('/login', function (req, res) {
    email = req.body.email;
    password = req.body.password;

    if (email != admin.email || password != admin.password) {
        login_failed = true;
        res.render('index', {login_failed: login_failed});
    } else {
        user.email = email;
        user.password = password;
        res.render('login.ejs', {
            user_email: user.email,
            login_status: true
        });
    }
});

app.get('/', (req, res) => {
    res.render('index', {login_failed: login_failed});
});

app.get('/news/:id', (req, res) => {
    res.render('news', {
        newsId: req.params.id
    });
});