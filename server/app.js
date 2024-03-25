import express from 'express'
import compression from 'compression'

var options = {
  etag: true,
}

express.static('/', options)

const app = express()
const port = 3000

app.use(compression())
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('Second assignment')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
