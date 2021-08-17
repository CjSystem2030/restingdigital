const express = require('express');

const app= express();

app.get('/', (req, res) => res.send('hola cristian'))

app.listen(4000);
console.log('server en port ', 4000);