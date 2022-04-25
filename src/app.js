const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
// const mongoose = require('mongoose');

const app = express();
const port = 4001;

app.use(json())
app.use(cors());

let dummyCount = 0
let temperatures = [];

app.get('/', (req, res) => {
    res.status(200).send(temperatures);
})

app.get('/:id', (req, res) => {
    const pathId = req.params.id
    const temperatureObject = temperatures.filter(temperature => temperature.id == pathId);
    res.status(200).send(temperatureObject)
})

app.post('/', (req, res) => {
    const request = req.body

    const temperatureObject = {
        id: dummyCount += 1,
        temperature: request.temperature 
    }

    temperatures.push(temperatureObject)
    res.status(201).send()
})

app.delete('/', (req, res) => {
    temperatures = []
    res.status(200).send()
})

app.delete('/query', (req, res) => {
    const queryId = req.query.id

    filteredList = temperatures.filter(temperature => temperature.id != queryId)
    temperatures = filteredList

    res.status(200).send()
})

app.put('/:value', (req, res) => {
    const pathValue = req.params.value
    const queryId = req.query.id
    console.log(`QUERY IS ${queryId} AND PARAMETER IS ${pathValue}`)

    temperatures.map(temperature => {
        if (temperature.id === queryId) {
            console.log(`FOUND IS ${queryId} CHANGING VALUE OF OBJECT`)
            temperature.temperature = pathValue
        }
    })

    res.status(200).send()
})

app.listen(port, (req, res) => {
    console.log(`server running on port ${port}`);
})

// async function main() {
//     await mongoose.connect(`mongodb+srv://${process.env.MY_USER}:${process.env.MY_PASSWORD}@cluster0.mxpes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
//     app.listen(port, (req, res) => {
//         console.log(`Server rodando na porta ${port}`);
//     })
// }

// main().catch(err => console.log(err));