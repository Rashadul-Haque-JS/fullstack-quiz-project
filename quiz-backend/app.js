const express = require('express')
const { readdirSync } = require('fs')
const app = express()
const cors = require('cors')
const morgan = require('morgan')


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
require('dotenv').config()


readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))



const port = process.env.PORT || 8000;

app.listen(port)
console.log(`Running on ${port}`)