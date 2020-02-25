const express = require('express');
const reload = require('reload');
//template engine
const app = express();

app.set('views', './view'); //views là thuộc tính, view là folder
app.set('view engine','ejs') //dùng view engine gì thì đổi ejs thành tương ứng
//đổi đuổi file html thành ejs

app.get('/', (req, res) => res.render("home"));
app.get('/learn',(req,res)=> res.render('learn'));

reload(app)
app.listen(3002, ()=>console.log("Server started"));