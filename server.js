const express = require('express')
const app = express()
const bodyparser = require("body-parser")

const userRoute = require("./route/user")

app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const port = process.env.PORT || 7070;

app.listen(port, () => {
    console.log(`Connection at ${port}`);
});

app.use('/api', userRoute)