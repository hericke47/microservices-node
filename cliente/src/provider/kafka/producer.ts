import { kafka } from ".";

export class KafkaSendMessage {
  async execute(topic: string, payload: any) : Promise<void> {
    const producer = kafka.producer({
      allowAutoTopicCreation: true
    })

    await producer.connect()

    console.log(`MESSAGE SENT TO TOPIC ${topic}`)
    console.log(payload)
    
    await producer.send({
      topic,
      messages: [
        {value: JSON.stringify(payload)}
      ]
    })

    await producer.disconnect()
  }
}