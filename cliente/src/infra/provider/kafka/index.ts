import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['tight-pig-11381-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'dGlnaHQtcGlnLTExMzgxJKkwBZTIVOsGtqL1Q30C4DD6mnT5Q-fqNDY5Gg2Gvmc',
    password: 'ZTQzOWE2YzItMmUzYy00NWZiLThiM2EtZDkzODcwOGI4MTM3',
  },
  ssl: true,
})

export { kafka }