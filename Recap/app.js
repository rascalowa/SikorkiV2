// const chalk = require('chalk');
// const yargs = require('yargs');
// const getNotes = require('./notes.js');

// // const command = process.argv[2];

// // if (command === 'add') {
// //     console.log('Adding note!');
// // } else if (command === 'remove') {
// //     console.log('Removing note!');
// // }


// //add
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string'
//         },
//     },
//     handler: function (argv) {
//         console.log('Title: ' + argv.title);
//         console.log('Body: ' + argv.body);
//     }
// })

// //remove
// yargs.command({
//     command: 'remove',
//     describe: 'Removing a new note',
//     handler: function () {
//         console.log('Removing a new note...');
//     }
// })

// //read
// yargs.command({
//     command: 'read',
//     describe: 'Reading a note',
//     handler: function () {
//         console.log('Reading a note...');
//     }
// })

// //list
// yargs.command({
//     command: 'listd',
//     describe: 'Listing all notes',
//     handler: function () {
//         console.log('Listing all notes...');
//     }
// })

// yargs.parse();