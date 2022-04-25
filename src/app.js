const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
// const mongoose = require('mongoose');

const temperatures = require('./routes/temperature')

const app = express();
const port = 4001;

app.use(json())
app.use(cors());
app.use('/temperature', temperatures)

app.get('/', (req, res) => {
    res.status(200).send(
        `<html>
            <head></head>
            <body>
                <h1> This is a Server Side Render Web page</h1>
                <div>
                    <p> Ok, I'm running on port ${port}.
                </div>
                <h2>Server RESTful Endpoints:</h2>
                <ul>
                    <li>curl -X POST http://localhost:4001/temperature -H 'Content-Type: application/json' -d "{\"temperature\": {value}}"</li>
                    <li>curl -X GET http://localhost:4001/temperature</li>
                    <li>curl -X GET http://localhost:4001/temperature/{id}</li>
                    <li>curl -X PUT http://localhost:4001/temperature/{temperature}?id={id}</li>
                    <li>curl -X DELETE http://localhost:4001/temperature</li>
                    <li>curl -X DELETE http://localhost:4001/temperature/query?id={id}</li>
                </ul>
            </body>
        </html>
        `
    )

})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

// async function main() {
//     await mongoose.connect(`mongodb+srv://${process.env.MY_USER}:${process.env.MY_PASSWORD}@cluster0.mxpes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
//     app.listen(port, (req, res) => {
//         console.log(`Server rodando na porta ${port}`);
//     })
// }

// main().catch(err => console.log(err));