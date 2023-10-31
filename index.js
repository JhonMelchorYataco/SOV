const express = require('express');
const path = require('path');
 
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('conociendo nodeJs');
});


app.use('/public', express.static(path.join(__dirname, 'public')))

app.listen(PORT, () =>
  console.log(`Se esta ejecutando sobre el puerto ${PORT}`),
);