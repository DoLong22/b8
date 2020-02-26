const express = require('express');
const reload = require('reload');
//template engine
const app = express();

app.set('views', './view'); //views là thuộc tính, view là folder
app.set('view engine','ejs') //dùng view engine gì thì đổi ejs thành tương ứng
//đổi đuổi file html thành ejs

const arrX = [
    {name: "Teo",age:10},
    {name:"Ti",age: 12},
    {name:"Tun",age:15}
];
const arrSubjects  = ['Node','Angular','Mongo','Express'];
app.locals.arrPeople = arrX;//truyền dữ liệu tĩnh

app.get('/', (req, res) => res.render("home"));
app.get('/learn',(req,res)=>{
    
    res.render('learn',{username: "khoaPham", arrSubjects:arrSubjects});
    
}); //truyền dữ liệu động

reload(app)
app.listen(3000, ()=>console.log("Server started"));