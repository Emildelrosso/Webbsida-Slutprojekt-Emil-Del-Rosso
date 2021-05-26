const { json } = require('express');
const express = require('express');
const { get } = require('mongoose');
const app = express()
const port = 3000
const staticDir = __dirname + "\\static\\";

app.use(express.static(staticDir));
app.use(express.urlencoded());
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(staticDir + "html\\Home.html")
});

app.get('/Meny', (req, res) => {
  res.sendFile(staticDir + "html\\Meny.html")
});

app.get('/Catering', (req, res) => {
  res.sendFile(staticDir + "html\\Catering.html")
});

app.get('/Kontakta oss', (req, res) => {
  res.sendFile(staticDir + "html\\Kontakta oss.html")
});

app.post('/message', function (req, res) {
    console.log(req.body.fname);
    console.log(req.body.message);
  res.redirect("/")
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
