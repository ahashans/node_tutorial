const fs = require('fs')
const books = [
    {
        title:'Javascript',
        author:'google'
    },
    {
        title:'Dotnet',
        author:'microsoft'
    }
]
const booksJSON = JSON.stringify(books)
fs.writeFileSync('1-json.json',booksJSON)
const booksObjStr = JSON.parse(fs.readFileSync('1-json.json').toString())
console.log(booksObjStr[0].title)