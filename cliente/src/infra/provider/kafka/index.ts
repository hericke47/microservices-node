import { Kafka, logLevel } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'client',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
})

export { kafka }