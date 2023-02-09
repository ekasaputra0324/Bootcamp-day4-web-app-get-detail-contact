const express = require('express')
const app = express();
const fs = require('fs');
const morgan = require('morgan');
var expressLayouts = require('express-ejs-layouts');
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layout/layout.ejs');
app.use(express.static('public'));
app.use(morgan('dev'));

const contact = 

// app.use((req, res, next) => {
// console.log('Time:', Date.now())
// next()
// })

app.get('/', (req, res) => {
   res.render('index', {title: 'Index'});
})
app.get('/contact', (req, res) => {
    fs.readFile('./data/contact.json', 'utf-8',(err, data) =>{
        if (err) throw err;
        data = JSON.parse(data);
        console.log(data);
        res.render('contact', {title: 'Contact', data});
    });
})

app.get('/contact/detail/:name', (req, res)=> {
    const name = req.params.name;
    fs.readFile('./data/contact.json', 'utf-8',(err, data) =>{
       let parse = JSON.parse(data);
        detail =  parse.filter(contact => contact.nama.toLowerCase() == name.toLowerCase());
        res.render('detail', {title:'Detail',  detail})
    });
});

app.get('/produk/:id/categori/:kategori', (req, res) => {
      id = req.params.id;
      kategori = req.params.kategori;
      res.send(`produk id : ${id} </br> kategori : ${kategori}`);
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Me', });
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('404 Page Not Found!');
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log("server listening on port:" + port);
})