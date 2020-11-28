const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else if (duplicateNotes > 0){
        console.log(chalk.red.inverse('Note already exists'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed'))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
    saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blueBright('A list of all your notes'))
    const listAllNotes = notes.map(note => {
        console.log(note.title)
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const readNote = title => {
    const notes = loadNotes()
    let noteFound = false
    const findNote = notes.find(note => note.title === title)
    findNote ? console.log(`Title: ${chalk.green(findNote.title)}   Body: ${chalk.yellow(findNote.body)}`) : console.log(chalk.red.inverse('no note found'))
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}