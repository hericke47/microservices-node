import express from 'express'

const PORT = process.env.PORT ?? 3003

const app = express()
app.use(express.json())

app.listen(PORT, () => console.log(`Server PRODUTO started on port ${PORT}`))