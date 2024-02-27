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

    const checkData = ' SELECT `Email` from signIn_signUp where `Email`=? '
    const checkEmail=req.body[1]

    db.query(checkData,(checkEmail),(err,data)=>{

        if(err) console.log(err)

        if(data.length>=1){
            return res.json("Email Already exist")
        }

        else{
            const sql = "INSERT INTO signIn_signUp (`username`,`email`,`password`) values (?,?,?)"

            const values =[
                username=req.body[0],
                email=req.body[1],
                password=req.body[2]
            ]
            db.query(sql,(values),(err,data)=>{
                if(err) console.log(err)
                
                return res.json("Success")
            })
        }
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
    const checkData = ' SELECT `Email` from test_drive where `Slotdate`=? '

    const date = req.body[4]

    db.query(checkData,(date),(err,data)=>{

        if(err) console.log(err)

        if(data.length>=2){
            console.log(data.length)
            return res.json("Slot unavailable")
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



app.post('/book_now',(req,res)=>{
    const sql = " INSERT INTO book_now (`firstname`,`lastname`,`email`,`phone`,`model`,`street`,`city`,`state`,`pincode`,`bookingid`) values (?,?,?,?,?,?,?,?,?,?)"


    const bookData = [
        firstName = req.body[0],
        lastName = req.body[1],
        email = req.body[2],
        phone = req.body[3],
        model = req.body[4],
        street = req.body[5],
        city = req.body[6],
        state = req.body[7],
        pincode = req.body[8],
        bookingId = req.body[9]
    ]

    db.query(sql,(bookData),(err,data)=>{
        if(err)
        {
            console.log(err)
            alert("Somthing went wrong...")
        }
        else{
            return res.json('Success')
        }
    })

})



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
        
        if(data.length>=2)
            return res.json("No stock")

        else{
            const sql = "INSERT INTO accessories(`name`,`email`,`phone`,`address`,`item`,`price`) VALUES (?,?,?,?,?,?)"
            db.query(sql,(values),(err,data)=>{
                if(err) console.log(err)

                return res.json("Success")
            })
        }
        
    })
})


app.post('/get_data',(req,res)=>{
    const getUser = "SELECT * FROM accessories WHERE `email`=? "
    const G_Email = req.body[0]

    db.query(getUser,(G_Email),(err,data)=>{
        if(err) console.log(err)

        return res.json(data[0])
    })
})


app.listen(3001,()=>{
    console.log("Backend Connected...")
})