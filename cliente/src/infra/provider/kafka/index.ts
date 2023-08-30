import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  clientId: 'client',
  brokers: ['localhost:9092'],
  retry: {
    initialRetryTime: 300,
    retries: 10,
  }
})

export { kafka }