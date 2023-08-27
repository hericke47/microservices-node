import { Kafka, logLevel } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'order',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
})

export { kafka }