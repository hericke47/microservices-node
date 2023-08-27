import { Kafka, logLevel } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'product',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
})

export { kafka }