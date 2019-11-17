const fs = require('fs')
const chalk = require('chalk')
const listNote = ()=>{
    const notes=loadNotes()
    if(notes.length>0){
        notes.forEach(note => {
            console.log("-----")
            console.log(chalk.green.inverse(note.title))
            console.log("Note Body: "+note.body)    
        })
    }
    else{
        console.log(chalk.inverse.red("No notes found!"))
    }
}
const addNote=(title,body)=>{
    const notes = loadNotes()    
    const duplicateNote = notes.find(note=>note.title === title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    }
    else{
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }    
}
const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter(note=> note.title!==title)
    if(notesToKeep.length===notes.length){
        console.log(chalk.red.inverse("Note with title: `"+title+"` not found!"))
    }
    else{
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note with title: `"+title+"` removed!"))
    }
}
const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find(note=>note.title===title)
    if(note){
        console.log(chalk.green.inverse(note.title))
        console.log(note.body) 
    }
    else{
        console.log(chalk.red.inverse("Note not found!"))
    }
}
module.exports = {
    listNote: listNote,
    addNote:addNote,
    removeNote:removeNote,
    readNote:readNote
}
