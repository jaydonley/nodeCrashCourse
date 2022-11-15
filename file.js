const fs = require('fs');



//----------------READ-----------------------



// fs.readFile('./docs/blog.txt', (err, data) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');


// ---------------------WRITE--------------------------


// fs.writeFile('./docs/blog.txt', 'said the monster', () => {
//     console.log('file was written');
// });


// fs.writeFile('./docs/blog2.txt', 'Oh! Its Dracula.', () => {
//     console.log('file was written');
// });


//  ---------------DIRECTORIES-----------------

// if (!fs.existsSync('./assets')){
// fs.mkdir('./assets', (err) => {
//     if (err){
//         console.log(err);
//     }
//     console.log('folder created');
// });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//         console.log(err)

//         }
//         console.log('folder deleted');
// });
// };

//------------------REMOVING -----------------

if(fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}