const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const rootRouter = require('./routes/index')
require('dotenv').config()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use('/api/v1', rootRouter)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});