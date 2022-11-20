//-------- mongoDB: JDKA , JDKA

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes')

const app = express();

const dbURI = "mongodb+srv://KATEST:KATEST@node-tuts.vqzsbhx.mongodb.net/node-tuts?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


// app.use((req, res, next) => {
//     console.log('A New Request Made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });





app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });

});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});