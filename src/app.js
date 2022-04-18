const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 4001;

app.use(json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World\n');
})

app.post('/', (req, res) => {
    res.status(201).send('POST its working')
    const request = req.body
    console.log(request,temperature)
    // res.status(201).send()
})

app.put('/', (req, res) => {
    res.send('PUT its working');
})

app.delete('/', (req, res) => {
    res.send('DELETE its working');
})

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.MY_USER}:${process.env.MY_PASSWORD}@cluster0.mxpes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    app.listen(port, (req, res) => {
        console.log(`Server rodando na porta ${port}`);
    })
}

main().catch(err => console.log(err));