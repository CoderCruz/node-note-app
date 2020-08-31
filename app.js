// //require function is how we load in modules or import for es6
// //then we store whatever imported in variable
// const fs = require('fs') <----- Syntax 

// const fs = require('fs')

// // fs is an object datatype.  Also short for file system.
// // writefilesync is a method
// // fs must be loaded in and defined
// //first argument is name of file and what type of file.  and second argument is what do we want to write.(used with string.)
// // fs.writeFileSync('notes.txt', 'My name is Jose.')
// fs.appendFileSync('notes.txt', 'luis i love you but smd')




// const name = require('./utils.js')
// const add = require('./utils.js')

// const sum = add(1, 1)

// console.log(sum)

// console.log(name + ' i am line 21')


// ----------------------------------------------------------------------------------------


//EXERCISE
//when importing files you list filepath in require
//when importing node package modules you list the name of module
//when importing core nodemodules you list file name

// console.log(process.argv) <---- this is how you access all user input when in CLI
// each diffirent input after command is considered a different index.



const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//example on how to check user input and control what to do with that data.
// const command = process.argv[2]
// if(command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('removing note!')
// }





//customize yargs version
yargs.version('1.1.0')

//NOTES APP: add, remove, read, list

//create add command for yarg
yargs.command({
    command: 'add', /* this is how you give command name for your app.  */
    describe: 'Add new note', /*this is how you see description when using --help flag */
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, /*This key value pair makes sure that input field is required*/
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) { /*this is what will happen when user types command */
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function() {
        console.log('Removing your note now!')
    }
})


//create list command
yargs.command({
    command: 'list',
    describe: 'list all previous notes',
    handler: function() {
        console.log('Listing your notes now!', argv)
    }
})


//create read command
yargs.command({
    command: 'read',
    describe: 'read a single note',
    handler: function() {
        console.log('here is your note')
    }
})


yargs.parse() /*another way to parse through arguments */

console.log(yargs.argv)
console.log(process.argv)