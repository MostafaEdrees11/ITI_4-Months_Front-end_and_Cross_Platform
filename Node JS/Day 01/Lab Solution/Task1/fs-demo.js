const fileSystem = require('fs');

// Write on file
// fileSystem.writeFile('./notes.txt', 'Test: write on text file.', function (err) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log('Finish Writting');
// });

// Append on file
// fileSystem.appendFile('./notes.txt', '\nAppend: append new Note.', function (err) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log('Finish Appending');
// });

// Read data from a file
// fileSystem.readFile('./notes.txt', "utf-8", function (err, data) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(data);
// })


// Rename a file
// fileSystem.rename('./notes.txt', './notes-final.txt', function (err) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log("File Renamed.");
// });


// Delete a file
// fileSystem.rm('./notes.txt', function (err) {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log('File Deleted.');
// });