const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4001;

app.use(json())
app.use(cors());

let temperatures = [];

app.get('/', (req, res) => {
    res.status(200).send(`${temperatures}\n`);
})

app.post('/', (req, res) => {
    const request = req.body
    console.log(request.temperature)
    res.status(201).send('POST its working\n')
})

app.put('/', (req, res) => {
    res.send('PUT its working\n');
})

app.delete('/', (req, res) => {
    temperatures = [];
    res.status(200).send('DELETE its working\n');
})

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.MY_USER}:${process.env.MY_PASSWORD}@cluster0.mxpes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    app.listen(port, (req, res) => {
        console.log(`Server rodando na porta ${port}`);
    })
}

main().catch(err => console.log(err));