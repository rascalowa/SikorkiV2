//const chalk = require('chalk');
const yargs = require('yargs');


//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    builder: {
        title: {
            describe: 'Title of note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Removing a new note...');
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Title of note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Reading a note...');
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: function (argv) {
        console.log('Listing all notes...');
        console.log(argv);
    }
})

yargs.parse();