const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

app.use(cors());

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('ok i will give you this API')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log('yeah i got this API', port)
})