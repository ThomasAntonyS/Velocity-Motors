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
    const values =[
        username=req.body[0],
        email=req.body[1],
        password=req.body[2]
    ]
    db.query(sql,(values),(err,data)=>{
        console.log(data);
        if(err) return false
        return true
    })
})



app.post('/login',(req,res)=>{
    const sql = "SELECT `username`,`password` FROM signIn_signUp WHERE `email`=? AND `password`=? "
    const values =[
        emailLogin=req.body[0],
        passwordLogin=req.body[1]
    ]
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



app.post('/test_drive',(req,res)=>{
    const sql = "INSERT INTO test_drive (`name`,`email`,`phone`,`model`) values (?,?,?,?)"
    const testD_values = [
        nameTd = req.body[0],
        emailTd = req.body[1],
        phoneTd = req.body[2],
        modelTd = req.body[3]
    ]
    db.query(sql,(testD_values),(err,data)=>{
        if(err){
            console.log(err)
            return res.json("Fail")
        }
        return res.json('Success')
    })
})



app.post('/book_now',(req,res)=>{
    const sql = " INSERT INTO book_now (`firstname`,`lastname`,`email`,`phone`,`model`,`street`,`city`,`state`,`pincode`) values (?,?,?,?,?,?,?,?,?)"
    const bookData = [
        firstName = req.body[0],
        lastName = req.body[1],
        email = req.body[2],
        phone = req.body[3],
        model = req.body[4],
        street = req.body[5],
        city = req.body[6],
        state = req.body[7],
        pincode = req.body[8]
    ]
    db.query(sql,(bookData),(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            return res.json('Success')
        }
    })

})


app.listen(3001,()=>{
    console.log("Backend Connected...")
})