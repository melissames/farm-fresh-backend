const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const ingredientRouter = require('./routers/ingredient')
const planTypeRouter = require('./routers/plantype')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(ingredientRouter)
app.use(planTypeRouter)


app.listen(port, () => {
    console.log('server is up on port', port)
})