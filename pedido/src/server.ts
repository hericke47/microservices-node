import express from 'express'
import { router } from './routes'
import './providers/kafka/consumer.ts'

const PORT = process.env.PORT ?? 3002

const app = express()
app.use(express.json())

app.use(router)

app.listen(PORT, () => console.log(`Server PEDIDO started on port ${PORT}`))