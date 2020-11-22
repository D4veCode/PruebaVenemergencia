const express = require("express")
const { json } = require("express")
const cors = require("cors")
const morgan = require("morgan")
const benficiarioRouter = require("./routes")

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(morgan('tiny'))
app.use(json())

app.use('/api', benficiarioRouter)

app.listen(port, () => {
    console.log(`App funcionando en el puerto ${port}`)
})