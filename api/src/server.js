import express from 'express'
import routes from './routes'
import connection from './database'

const app = express()
app.use(express.json())
app.use(routes)

app.listen(3333, () => console.log('> Server running on http://localhost:3333'))
