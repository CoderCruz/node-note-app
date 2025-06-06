# QuickNote CLI 📝

QuickNote CLI is a lightweight command-line application built with Node.js that helps developers capture notes quickly and efficiently without ever leaving the terminal. Whether you're debugging, reviewing code, or capturing quick thoughts, QuickNote CLI offers an intuitive way to manage your notes with full CRUD functionality.

## Features
- Make sure to run npm install in project root directory before running commands below.
- ✅ Add new notes: `node app.js add --title="..." --body="..."`
- 🗑️ Remove notes: `node app.js remove --title="..."`
- 📋 List all notes: `node app.js list`
- 🔍 Read a specific note: `node app.js read --title="..."`

## Examples

node app.js add --title="Meeting Notes" --body="Discuss project roadmap and deadlines."
node app.js list
node app.js read --title="Meeting Notes"
node app.js remove --title="Meeting Notes"


## Tech Stack

- **Node.js**
- **JavaScript**
- [Yargs](https://www.npmjs.com/package/yargs) – for parsing and handling command-line arguments
- [Chalk](https://www.npmjs.com/package/chalk) – for colored and styled terminal output
