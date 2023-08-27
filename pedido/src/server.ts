import express from 'express'
import './infra/providers/kafka/consumers'

const PORT = process.env.PORT ?? 3002

const app = express()
app.use(express.json())

app.listen(PORT, () => console.log(`Server PEDIDO started on port ${PORT}`))