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