const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(morgan('dev'));
app.use(express.static('public'));

// app.use((req, res, next) => {
//     console.log('A New Request Made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];

app.get('/', (req, res) => {
    // res.send('<p>Home Page</p>');
    // res.sendFile('./views/index.html', { root: __dirname });
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    // res.send('<p>About Page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });

});

// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create A New Blog' });
});

app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' });
});