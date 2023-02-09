const express = require('express')
const app = express();
var expressLayouts = require('express-ejs-layouts');
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layout/layout.ejs');
app.use(express.static('public'));

const contact = [
                    {
                        nama: "muhammad eka saputra",
                        tlpn  : "08124971970"
                    },
                    {
                        nama: " eka saputra",
                        tlpn  : "08124971910"
                    }
                ]

// app.use((req, res, next) => {
// console.log('Time:', Date.now())
// next()
// })

app.get('/', (req, res) => {
   res.render('index', {title: 'Index'});
})
app.get('/contact', (req, res) => {
    console.log(contact);
    res.render('contact', {title: 'Contact', data: contact});
})

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