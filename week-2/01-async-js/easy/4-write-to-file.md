## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fs = require('fs') 
fs.writeFile('./easy/file.txt', 'Hi from file.txt, could have named it a.txt', (err) => {
     if (err) {
         console.log(err)
 }
  else 
  {
     console.log("done")
      }
 })