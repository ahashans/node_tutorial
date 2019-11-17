const path = require('path')
const express = require('express')

const app = express()
const publicFolderPath = path.join(__dirname,'../public')
// const viewFolderPath = path.join(__dirname,'../views')

app.set('view engine', 'hbs')
app.use(express.static(publicFolderPath))
// app.use(express.static(viewFolderPath))
app.get('',(req,res)=>{
    res.render('index', {
        title:'Greetings',
        message:'Hello from node hbs'
    })
})
app.get('/help',(req,res)=>{
    res.render('help')
})
app.get('/weather',(req,res) => {
    res.send('<h1>Your weather!</h1>')
})
app.listen(3001, ()=>{
    console.log("server is running on port 3001")
})