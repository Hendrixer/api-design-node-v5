/**
 * Entry to the application.
 * Calls the 'app' express object from server.ts
 */
import app from './server.ts'

app.listen(3000, () => {
  console.log('server running on port: 3000')
})
