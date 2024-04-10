## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs')

fs.readFile('./medium/file.txt', 'utf-8', (err, data) => { 
    if (err) { 
        return console.log(err) 
    } 
    data = data.replace(/\s+/g, ' ').trim() 
    fs.writeFile('./medium/file.txt', data, err => { 
        if (err) { 
            return console.log(err) 
            }
     console.log("Done") }
     ) 
    })