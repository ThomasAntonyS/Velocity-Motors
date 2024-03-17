const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const bodyParser = require('body-parser');


const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());



//Database Connection
const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'velocity_motors'
})



// Register Table Query
app.post('/register',(req,res)=>{

    const checkData = ' SELECT `Email` from signIn_signUp where `Email`=? '
    const checkEmail=req.body.email

    db.query(checkData,(checkEmail),(err,data)=>{

        if(err) console.log(err)

        if(data.length>=1){
            return res.json("Email Already exist")
        }

        else{
            const sql = "INSERT INTO signIn_signUp (`username`,`email`,`password`) values (?,?,?)"

            const values =[
                username=req.body.username,
                email=req.body.email,
                password=req.body.password
            ]
            db.query(sql,(values),(err,data)=>{
                if(err) console.log(err)
                
                return res.json("Success")
            })
        }
    })
    
})



//Login verification query
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




//Test Drive table query
app.post('/test_drive',(req,res)=>{
    const checkData = ' SELECT `Email` from test_drive where `Slotdate`=? '

    const date = req.body[4]

    db.query(checkData,(date),(err,data)=>{

        if(err) console.log(err)

        if(data.length>=1){
            return res.json('Slot unavailable')
        }
        else{
            const sql = "INSERT INTO test_drive (`name`,`email`,`phone`,`model`,`slotdate`) values (?,?,?,?,?)"

            const testD_values = [
                nameTd = req.body[0],
                emailTd = req.body[1],
                phoneTd = req.body[2],
                modelTd = req.body[3],
                slotdate = req.body[4]
            ]

            db.query(sql,(testD_values),(err,data)=>{
            if(err){
                console.log(err)
                return res.json("Fail")
            }
            return res.json('Success')
            })
        }
    })
})




//Book now Table Query
app.post('/book_now',(req,res)=>{
    const sql = " INSERT INTO book_now (`firstname`,`lastname`,`email`,`phone`,`model`,`street`,`city`,`state`,`pincode`,`bookingid`) values (?,?,?,?,?,?,?,?,?,?)"


    const bookData = [
        firstName = req.body[0].firstName,
        lastName = req.body[0].lastName,
        email = req.body[0].email,
        phone = req.body[0].phone,
        model = req.body[0].model,
        street = req.body[0].street,
        city = req.body[0].city,
        state = req.body[0].state,
        pincode = req.body[0].pincode,
        bookingId = req.body[1]
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




//Accessories Table query
app.post('/accessories',(req,res)=>{

    const checkStock = "SELECT `email` FROM accessories WHERE `item`=? "

    const values=[
        fname=req.body[0],
        email=req.body[1],
        phone=req.body[2],
        address=req.body[3],
        item=req.body[4],
        price=req.body[5]
    ]

    const Item=req.body[4]

    db.query(checkStock,(Item),(err,data)=>{
        if(err) 
            console.log(err)
        
        if(data.length>=1)
            return res.json("No stock")

        else{
            const sql = "INSERT INTO accessories(`name`,`email`,`phone`,`address`,`item`,`price`) VALUES (?,?,?,?,?,?)"
            db.query(sql,(values),(err,data)=>{
                if(err) console.log(err)
                else{
                    return res.json("Success")
                }
            })
        }
        
    })
})




//Feedback Table Query
app.post('/feedback',(req,res)=>{
    const sql = " INSERT INTO feedback (`name`,`email`,`model`,`date`,`message`) VALUES (?,?,?,?,?) "
    const values =[
        name = req.body.name,
        email = req.body.email,
        model = req.body.model,
        date  = req.body.date,
        message = req.body.msg
    ]

    db.query(sql,(values),(err,data)=>{
        if(err) console.log(err)
        else
        return res.json('Thanks')
    })

})


app.listen(3001,()=>{
    console.log("Backend Connected...")
})