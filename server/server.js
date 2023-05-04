const express = require('express');

const PORT = 8000;

const app = express();

app.use(express.static('public/assignment'));

app.listen(PORT, () => {
    console.log(`App is listening on port:  ${PORT}`);
})