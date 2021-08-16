const express = require('express');

const app= express();

app.get('/', (req, res) => res.send('hola cristian'))

app.listen(3000);
console.log('server en port ', 3000);