const express = require('express')
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

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
    res.render('about', {title: 'Contact', });
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('404 Page Not Found!');
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log("server listening on port:" + port);
})