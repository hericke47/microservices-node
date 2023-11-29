import express from 'express'
import './infra/provider/kafka/consumer'
import { router } from './infra/routes'

const PORT = process.env.PORT ?? 3001

const app = express()
app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`Server CLIENT started on port ${PORT}`))