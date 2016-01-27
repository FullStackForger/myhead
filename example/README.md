```yml
title: myhead example header
multiline: >+
  some problem goes here some problem goes here some problem goes here some problem goes here
  some problem goes here some problem goes here some problem goes here some problem goes here

  some problem goes here some problem goes here some problem goes here some problem goes here
  some problem goes here some problem goes here some problem goes here some problem goes here
  some problem goes here some problem goes here some problem goes here some problem goes here
array: [1,3,4]  
```

# myhead example header

Notice this files has a yml flavored code block. Run:
```
node index.js
```

`README_OUT.md` will be created with modified header extracted from this file.
Once file is created you can play with it adding extra markdown content
underneath the header, modify the header and re-run the script.

Take a look at `index.js` file for details.
