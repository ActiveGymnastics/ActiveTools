import express = require('express');
import bodyParser = require('body-parser');
import cors = require ('cors');

const app = express();
const port = process.env.PORT || 8000;

var corsOptions = {
    origin: "*"
}

// Allow requests from any host
app.use(cors(corsOptions));

// Parse requests with application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({message: "Active Tools", ver: "0.0.1"})
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);})