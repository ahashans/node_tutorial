const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicFolderPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicFolderPath))

app.get('',(req,res)=>{
    res.render('index', {
        title:'Greetings',
        message:'Hello from node hbs'
    })
})
app.listen(3001, ()=>{
    console.log("server is running on port 3001")
})
