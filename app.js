const {
    urlencoded,
    json
} = require('body-parser');


const express = require('express');
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Running on ${port}`);
});