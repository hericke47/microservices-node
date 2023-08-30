import express from 'express'
import { router } from './infra/routes'
import './infra/providers/kafka/consumers'

const PORT = process.env.PORT ?? 3002

const app = express()
app.use(express.json())

app.use(router)

app.listen(PORT, () => console.log(`Server PEDIDO started on port ${PORT}`))