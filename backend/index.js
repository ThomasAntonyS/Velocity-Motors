const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'velocity_motors'
})

app.post('/register',(req,res)=>{
    const sql = "INSERT INTO signIn_signUp (`username`,`email`,`password`) values (?,?,?)"
    const username=req.body[0]
    const email=req.body[1]
    const password=req.body[2]
    values=[username,email,password]
    db.query(sql,(values),(err,data)=>{
        console.log(data);
        if(err) return false
        return true
    })
})

app.post('/login',(req,res)=>{
    const sql = "SELECT `username`,`password` FROM signIn_signUp WHERE `email`=? AND `password`=? "
    const emailLogin=req.body[0]
    const passwordLogin=req.body[1]
    values=[emailLogin,passwordLogin]
    db.query(sql,(values),(err,data)=>{
        if(err){ 
            console.log(err)
            return res.json(err)
        }
        if(data.length>0)
        {
            return res.json('Success')
        }
        else{
            return res.json('Fail')
        }
    })
})


app.listen(3001,()=>{
    console.log("Backend Connected...")
})