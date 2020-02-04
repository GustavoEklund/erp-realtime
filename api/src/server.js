import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
	return response.json({ hello: 'world' })
})

app.listen(3333, () => console.log('> Server running on http://localhost:3333'))
