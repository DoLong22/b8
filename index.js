const express = require('express');

//template engine
const app = express();

app.set('views', './view'); //views là thuộc tính, view là folder
app.set('view engine','ejs') //dùng view engine gì thì đổi ejs thành tương ứng
//đổi đuổi file html thành ejs

app.get('/', (req, res) => res.render("home"));
app.get('/lear',(req,res)=> res.render('lear'));
app.listen(3000, ()=>console.log("Server started"));