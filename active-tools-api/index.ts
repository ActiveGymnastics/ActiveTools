import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');
import winston = require('winston');

import xlsx = require('xlsx');
import fileUpload = require('express-fileupload');
import multer = require('multer');
const upload = multer({
  dest: 'uploads/',
  storage: multer.memoryStorage()
})

const app = express()
const port = 8000

const db = require('./models/index')
db.sequelize.sync()

const corsOptions = {
  origin: '*'
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'erorr' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}

// Allow requests from any host
app.use(cors(corsOptions))

// Parse requests with application/json
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(fileUpload())

app.get('/', (req, res) => {
  res.json({ message: 'Active Tools', ver: '0.0.1' })
})

app.post('/exceltocsv', upload.single('classes'), (req, res) => {
  res.json(xlsx.read(req.file))
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
