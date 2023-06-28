const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes);
        console.log(chalk.green('New note added!'));
    } else {
        console.log(chalk.red('Your title need to be unique!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green('Note removed!'));
    } else {
        console.log(chalk.red('There is no note with such title!'));
    }
}

const readNote = (title) => { 
    const notes = loadNotes();
    const noteToRead = notes.filter((note) => note.title === title);

    if (noteToRead.length) {
        console.log(chalk.blue.inverse('Your note: '));
        console.log(noteToRead[0]);
    } else {
        console.log(chalk.red('There is no note with such title!'));
    }
}

const listNotes = () => { 
    const notes = loadNotes();

    if (notes.length) {
        console.log(chalk.blue.inverse('List of your notes: '));
        notes.forEach((note) => console.log(note.title))
    } else {
        console.log(chalk.red('You don\'t have any notes'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    listNotes: listNotes,
};