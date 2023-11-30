import express from 'express'
import { router } from './routes'
import './provider/kafka/consumer/index'

const PORT = process.env.PORT ?? 3001

const app = express()
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`Server CLIENT started on port ${PORT}`))