/**
 * Main server/application file.
 * Creates the express web server object.
 */
import express from 'express'

const app = express()

app.get('/health', (req, res) => {
  res.json({ message: 'health good' }).status(200)
})

export default app
