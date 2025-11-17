import dotenv from 'dotenv/config'
import express from 'express'
const app = express()
dotenv.config()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})