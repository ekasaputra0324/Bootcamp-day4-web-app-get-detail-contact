const express = require('express')
const app = express();
const port = 3000;




app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
})
app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname});
})
app.get('/produk/:id/categori/:kategori', (req, res) => {
      id = req.params.id;
      kategori = req.params.kategori;
      res.send(`produk id : ${id} </br> kategori : ${kategori}`);
})

app.get('/about', (req, res) => {
    res.send('./about.html', {root: __dirname});
})

app.use('/', (req, res) => {
    res.status(404);
    res.send('404 Page Not Found!');
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log("server listening on port:" + port);
})