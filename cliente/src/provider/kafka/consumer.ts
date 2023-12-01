import { kafka } from "."

type CustomerConsumer = {
  customerId: string
  status: string
}

export async function initializeConsumer(){
  const consumer = kafka.consumer({ groupId: "CLIENT_CONSUMER_GROUP" })

  await consumer.connect()

  await consumer.subscribe({ topic: "ORDER_STATUS", fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ message }) => {
      const messageToString = message.value!.toString()
      const statusConsumer = JSON.parse(messageToString) as CustomerConsumer

      // Enviar mensagem por email
      console.log(
        `Atualização de status - cliente: ${statusConsumer.customerId} - Status: ${statusConsumer.status}`
      )
    }
  })
}

initializeConsumer()